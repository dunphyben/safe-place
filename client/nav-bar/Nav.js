var React = require('react/addons'),

    StateStreamMixin = require('rx-react').StateStreamMixin,
    NavStore = require('./Store'),
    NavActions = require('./Actions'),

    cx = React.addons.classSet,
    debug = require('debug')('sp:nav:comp');

var NavBar = React.createClass({displayName: "NavBar",
  mixins: [StateStreamMixin],

  getStateStream: function() {
    debug('init');
    return NavStore;
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
          onClick:  NavActions.goBack}, 
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
