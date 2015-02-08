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

  render: function() {

    var title = this.state.title,
        showBackButton = this.state.showBackButton;

    var buttonClass = cx({
      'nav_button': true,
      'nav_button-hide': !showBackButton
    });

    return (
      React.createElement("nav", {className: "nav"}, 
        React.createElement("div", {className: buttonClass }, 
          React.createElement("p", null, "back")
        ), 
        React.createElement("div", {className: "nav_title"}, 
          React.createElement("p", null, title )
        )
      )
    );
  }
});

module.exports = NavBar;
