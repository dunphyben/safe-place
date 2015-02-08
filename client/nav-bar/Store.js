var Store = require('rx-flux').Store,
    NavActions = require('./Actions'),
    debug = require('debug')('sp:nav:store');

var NavStore = Store.create({
  getInitialValue: function() {
    return {
      title: 'My Places',
      showBackButton: false
    };
  },

  getOperations: function() {
    return NavActions
      .setTitle
      .map(function(title) {
        debug('title transform');
        return {
          transform: function(state) {
            state.title = title;
            return state;
          }
        };
      });
  }
});

module.exports = NavStore;
