var Store          = require('rx-flux').Store,
    Rx             = require('rx'),
    MenuBarActions = require('./Actions');

var MenuBarStore = Store.create({

  /**
   * This works the same as calling getInitialState in a standard react
   * component.
   */
  getInitialValue: function() {
    return { currentlySelected: '1' };
  },

  /**
   * TODO: This currently only sets the selected menu bar item. It does not
   * instruct the app to change it's global state (i.e. the main app area).
   */
  getOperations: function() {
    return MenuBarActions
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

module.exports = MenuBarStore;
