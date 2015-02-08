// main entry point for app.
var React = require('react'),
    NavBar = require('./nav-bar'),
    SortMenu = require('./all-items/sort-menu'),
    RouteHandler = require('react-router').RouteHandler,
    MenuBar = require('./menu-bar');

var App = React.createClass({displayName: "App",

  render: function() {
    // TODO: SortMenu will need to be moved within the AllItems component
    return (
      React.createElement("main", null, 
        React.createElement(NavBar, null), 
        React.createElement(SortMenu, null), 
        React.createElement(RouteHandler, null), 
        React.createElement(MenuBar, null)
      )
    );
  }
});

module.exports = App;
