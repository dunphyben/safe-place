var React = require('react');

var SortMenu = React.createClass({displayName: "SortMenu",

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },

  /**
   * Slide down the menu.
   */
  slideToggle: function() {
    this.setState({ isOpen: !this.state.isOpen });
  },
  
  getInitialState: function() {
    return {
      currentlySelected: '1',
      sortBy: 'date',
      isOpen: false
    };
  },

  /**
   * When clicked the clicked link should get the selected class and tell the
   * app to sort the current list of elements by the sortBy param.
   *
   * Note: This method is meant to be bound with the first argument set to a
   * sortBy string. Otherwise this will be called as a standard event handler
   * and the only arg passed will be the event obj.
   */
  handleClick: function(sortBy, e) {
    var link   = e.currentTarget;
    console.log('hey no sorting by %s!', sortBy); // Debug/Todo
    this.setState({ currentlySelected: link.id });
  },

  render: function() {

    // 'open' class determines whether the component is visible or not
    var classes = React.addons.classSet({
      'open': this.state.isOpen
    });

    return (
      React.createElement("div", {id: "sort-menu", className: classes}, 
        React.createElement("ul", {className: "horizontal-menu"}, 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "1", 
              sortBy: "date", 
              className:  this.getClassNames('1'), 
              onClick:  this.handleClick.bind(this, 'date') }, 
              React.createElement("span", null, "Recent")
            )
          ), 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "2", 
              sortBy: "alphabetical", 
              className:  this.getClassNames('2'), 
              onClick:  this.handleClick.bind(this, 'alphabetical') }, 
              React.createElement("span", null, "A-Z")
            )
          ), 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "3", 
              sortBy: "favorites", 
              className:  this.getClassNames('3'), 
              onClick:  this.handleClick.bind(this, 'favorites') }, 
              React.createElement("img", {src: "/images/sort-menu/heart-unselected.png"}), 
              React.createElement("img", {src: "/images/sort-menu/heart-selected.png", className: "selected"})
            )
          ), 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "4", 
              sortBy: "locked", 
              className:  this.getClassNames('4'), 
              onClick:  this.handleClick.bind(this, 'locked') }, 
              React.createElement("img", {src: "/images/sort-menu/padlock-unselected.png"}), 
              React.createElement("img", {src: "/images/sort-menu/padlock-selected.png", className: "selected"})
            )
          )
        ), 
        React.createElement("button", {className: "toggle", onClick:  this.slideToggle})
      )
    );
  }

});

module.exports = SortMenu;
