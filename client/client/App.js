// main entry point for app.
var React = require('react'),
    NavBar = require('./nav-bar'),
    MenuBar = require('./menu-bar');

var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("main", null, 
        React.createElement(NavBar, null), 
        React.createElement(MenuBar, null)
      )
    );
  }
});

module.exports = App;
