// main entry point for app.
var React = require('react'),
    NavBar = require('./nav-bar'),
<<<<<<< HEAD
    SortMenu = require('./all-items/sort-menu'),
=======
    RouteHandler = require('react-router').RouteHandler,
>>>>>>> Initial List and AllItems List comp
    MenuBar = require('./menu-bar');

var App = React.createClass({displayName: "App",
  
  // TODO: SortMenu will need to be moved within the AllItems component
  render: function() {
    return (
      React.createElement("main", null, 
        React.createElement(NavBar, null), 
<<<<<<< HEAD
        React.createElement(SortMenu, null), 
=======
        React.createElement(RouteHandler, null), 
>>>>>>> Initial List and AllItems List comp
        React.createElement(MenuBar, null)
      )
    );
  }
});

module.exports = App;
