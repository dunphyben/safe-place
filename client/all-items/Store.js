var _ = require('lodash'),
    Rx = require('rx'),
    debug = require('debug')('sp:allItems:store'),
    Store = require('rx-flux').Store,
    AllItemsActions = require('./Actions');

var AllItemsStore = Store.create({
  getInitialValue: function() {
    debug('init');
    return {
      items: [],
      name: ''
    };
  },

  getOperations: function() {
    return Rx.Observable.merge(
      AllItemsActions
        .setName
        .map(function(e) {
          e.preventDefault();
          var name = e.target.value;
          return {
            name: name
          };
        })
        .map(createTransform),

      AllItemsActions
        .setItems
        .map(function(items) {
          return { items: items };
        })
        .map(createTransform)
    );
  }
});

function createTransform(newState) {
  return {
    transform: function(state) {
      return _.assign({}, state, newState);
    }
  };
}
module.exports = AllItemsStore;
