var React = require('react/addons'),
    cx = React.addons.classSet,
    debug = require('debug')('sp:nav:comp');

var NavBar = React.createClass({displayName: "NavBar",

  getInitialState: function() {
    debug('init');
    return {
      title: 'My Places',
      showBackButton: false
    };
  },

  _handleBackClick: function() {
    debug('back button');
    this.state({
      showBackButton: !this.state.showBackButton
    });
  },

  render: function() {
    var title = this.state.title,
        showBackButton = this.state.showBackButton;

    var buttonClass = cx({
      'nav_button': true,
      'nav_button-hide': !showBackButton
    });

    return (
      React.createElement("nav", {className: "nav"}, 
        React.createElement("div", {
          className: buttonClass, 
          onClick:  this._handleBackClick}, 
          React.createElement("img", {src: "images/chevron.png"})
        ), 
        React.createElement("div", {className: "nav_title"}, 
          React.createElement("p", null, title )
        )
      )
    );
  }
});

module.exports = NavBar;
