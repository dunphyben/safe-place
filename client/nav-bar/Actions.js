var Action = require('rx-flux').Action,
    debug = require('debug')('sp:nav:actions');

var actions = {
  goBack: Action.create(),
  setTitle: Action.create()
};

actions.goBack.subscribe(function() {
  // todo: handle app state change
  debug('goBack');
});

module.exports = actions;
