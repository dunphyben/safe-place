var React = require('react');

var MenuBar = React.createClass({displayName: "MenuBar",

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },

  /**
   * The 'Deposit Item' menu is selected initially.
   */
  getInitialState: function() {
    return { currentlySelected: '1' };
  },

  navigateTo: function() {
    // TODO...
  },

  handleClick: function(e) {
    console.log(e.currentTarget.id);
    this.setState({ currentlySelected: e.currentTarget.id });
  },

  render: function() {
    return (
      React.createElement("ul", {id: "menu-bar", className: "justify"}, 
        React.createElement("li", null, 
          React.createElement("a", {id: "1", className: this.getClassNames('1'), onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/deposit-item-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/deposit-item-selected@3x.png", 
                 className: "selected"}), 
            React.createElement("span", null, "Deposit Item")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {id: "2", className: this.getClassNames('2'), onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/all-items-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/all-items-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "My Places")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {id: "3", className: this.getClassNames('3'), onClick: this.handleClick}, 
            React.createElement("img", {src: "/images/history-unselected@3x.png"}), 
            React.createElement("img", {src: "/images/history-selected@3x.png", className: "selected"}), 
            React.createElement("span", null, "All Items")
          )
        ), 
        React.createElement("li", null, 
          React.createElement("a", {id: "4", className: this.getClassNames('4'), onClick: this.handleClick}, 
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
