var Store           = require('rx-flux').Store,
    SortMenuActions = require('./Actions');

module.exports = Store.create({

  /**
   * This works the same as calling getInitialState in a standard react
   * component.
   */
  getInitialValue: function() {
    return {
      currentlySelected: '1',
      sortBy: 'date',
      isOpen: false
    };
  },

  /**
   * TODO: This currently only sets the selected menu bar item. It does not
   * instruct the app to change it's global state (i.e. the main app area).
   */
  getOperations: function() {
    return SortMenuActions
      .setSelected
      .map(function(e) {
        return {
          transform: function(state) {
            state.currentlySelected = e.currentTarget.id;
            return state;
          }
        }
      });
  }

});
