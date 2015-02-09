var Action = require('rx-flux').Action;

var actions = {
  toggleVisible: Action.create(),
  setSelected: Action.create(),
  sortBy: Action.create()
}
module.exports = actions;
