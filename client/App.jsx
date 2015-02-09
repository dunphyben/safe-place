// main entry point for app.
var React = require('react'),
    NavBar = require('./nav-bar'),
    SortMenu = require('./all-items/sort-menu'),
    RouteHandler = require('react-router').RouteHandler,
    MenuBar = require('./menu-bar');

var App = React.createClass({

  // TODO: SortMenu will need to be moved within the AllItems component
  render: function() {
    return (
      <main>
        <NavBar />
        <SortMenu />
        <RouteHandler />
        <MenuBar />
      </main>
    );
  }
});

module.exports = App;
