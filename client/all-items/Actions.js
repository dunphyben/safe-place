var Action = require('rx-flux').Action,
    debug = require('debug')('sp:allItems:actions');

var AllItemsActions = {
  setItems: Action.create(),
  fetchItems: Action.create(),
  setName: Action.create()
};

AllItemsActions.fetchItems.subscribe(function() {
  // TODO: get items from server
  debug('fetchItems');
  AllItemsActions.setItems([
    { name: 'passport' },
    { name: 'pink slip' }
  ]);
});

module.exports = AllItemsActions;
