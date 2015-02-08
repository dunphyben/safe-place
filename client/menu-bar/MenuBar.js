var React            = require('react'),
    StateStreamMixin = require('rx-react').StateStreamMixin,
    MenuBarStore     = require('./Store'),
    MenuBarActions   = require('./Actions');

var MenuBar = React.createClass({displayName: "MenuBar",

  mixins: [StateStreamMixin],

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },

  getStateStream: function() {
    return MenuBarStore;
  },

  render: function() {
    return (
      React.createElement("ul", {id: "menu-bar", className: "justify"}, 
        React.createElement("li", null, 
          React.createElement("a", {
            id: "1", 
            className:  this.getClassNames('1'), 
            onClick:  MenuBarActions.setSelected}, 
            React.createElement("img", {src: "/images/deposit-item-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/deposit-item-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "Deposit Item")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {
            id: "2", 
            className:  this.getClassNames('2'), 
            onClick:  MenuBarActions.setSelected}, 
            React.createElement("img", {src: "/images/my-places-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/my-places-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "My Places")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {
            id: "3", 
            className:  this.getClassNames('3'), 
            onClick:  MenuBarActions.setSelected}, 
            React.createElement("img", {src: "/images/all-items-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/all-items-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "All Items")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {
            id: "4", 
            className:  this.getClassNames('4'), 
            onClick:  MenuBarActions.setSelected}, 
            React.createElement("img", {src: "/images/history-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/history-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "History")
          )
        )
      )
    );
  }

});

module.exports = MenuBar;
