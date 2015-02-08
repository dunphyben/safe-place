// main entry point for app.
var React = require('react'),
    NavBar = require('./nav-bar');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <NavBar />
      </main>
    );
  }
});

module.exports = App;
