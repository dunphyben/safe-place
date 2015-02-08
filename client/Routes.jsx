var React = require('react'),

    Router = require('react-router'),
    Route = Router.Route,
    //HistoryLocation = Router.HistoryLocation,

    App = require('./App'),
    AllItems = require('./all-items'),
    debug = require('debug')('sp:router');

var mountNode = document.getElementById('app');

var routes = (
  <Route
    name='main'
    path='/'
    handler={ App } >
    <Route name='all-items' handler={ AllItems } />
  </Route>

);

Router.run(routes, function(Handler, state) {
  debug('router state change to %s', state.path);
  Handler = React.createFactory(Handler);
  React.render(Handler(), mountNode, function(err) {
    if (err) {
      return debug('err mounting', err);
    }
    debug('React rendered!');
  });
});
