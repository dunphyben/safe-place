// main entry point for app.
var React = require('react'),
    NavBar = require('./nav-bar'),
    MenuBar = require('./menu-bar');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <NavBar />
        <MenuBar />
      </main>
    );
  }
});

module.exports = App;
