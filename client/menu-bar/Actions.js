var Action = require('rx-flux').Action;

var actions = {
  navigateTo: Action.create(),
  setSelected: Action.create()
};

module.exports = actions;
