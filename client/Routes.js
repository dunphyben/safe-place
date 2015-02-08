var React = require('react'),

    Router = require('react-router'),
    Route = Router.Route,
    HistoryLocation = Router.HistoryLocation,

    App = require('./App'),
    debug = require('debug')('sp:router');

var mountNode = document.getElementById('app');

var routes = (
  React.createElement(Route, {
    name: "main", 
    path: "/", 
    handler: App })
);

Router.run(routes, HistoryLocation, function(Handler, state) {
  debug('router state change to %s', state.path);
  Handler = React.createFactory(Handler);
  React.render(Handler(), mountNode, function(err) {
    if (err) {
      return debug('err mounting', err);
    }
    debug('React rendered!');
  });
});
