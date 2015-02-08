var React = require('react');

var MenuBar = React.createClass({displayName: "MenuBar",

  /**
   * The 'Deposit Item' menu is selected initially.
   */
  getInitialState: function() {
    return { currentlySelected: 1 };
  },

  navigateTo: function() {
    // TODO...
  },

  handleClick: function() {
    console.log('handle that click!');
    // TODO...
  },

  render: function() {
    return (
      React.createElement("ul", {id: "main-nav", className: "justify"}, 
        React.createElement("li", null, 
          React.createElement("a", {id: 1, className: "icon-button", onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/deposit-item-unselected@3x.png"}), 
            React.createElement("img", {
              src: "/images/deposit-item-selected@3x.png", 
              className: "selected"}), 
            React.createElement("span", null, "Deposit Item")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {id: 2, className: "icon-button", onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/all-items-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/all-items-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "My Places")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {id: 3, className: "icon-button", onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/history-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/history-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "All Items")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {id: 4, className: "icon-button", onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/my-places-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/my-places-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "History")
          )
        )
      )
    );
  }

});

module.exports = MenuBar;
