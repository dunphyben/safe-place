var React = require('react');

var SortMenu = React.createClass({displayName: "SortMenu",

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },
  
  getInitialState: function() {
    return {
      currentlySelected: '1',
      sortBy: 'date'
    };
  },

  handleClick: function(e) {

    var sortBy = e.currentTarget.getAttribute('data-sortBy');

    // Debug
    var obj = {
      'date': 'Recent',
      'alphabetical': 'A-Z',
      'favorites': 'Heart',
      'locked': 'Padlock'
    };

    console.log('hey no sorting by %s!', obj[sortBy]);
  },

  render: function() {
    return (
      React.createElement("div", {id: "sort-menu"}, 
        React.createElement("ul", {className: "horizontal-menu"}, 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "1", 
              "data-sortBy": "date", 
              className:  this.getClassNames('1'), 
              onClick:  this.handleClick}, 
              React.createElement("span", null, "Recent")
            )
          ), 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "2", 
              "data-sortBy": "alphabetical", 
              className:  this.getClassNames('2'), 
              onClick:  this.handleClick}, 
              React.createElement("span", null, "A-Z")
            )
          ), 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "3", 
              className:  this.getClassNames('3'), 
              onClick:  this.handleClick}, 
              React.createElement("img", {src: "/images/sort-menu/heart-unselected.png"}), 
              React.createElement("img", {src: "/images/sort-menu/heart-unselected.png", className: "selected"})
            )
          ), 
          React.createElement("li", null, 
            React.createElement("a", {
              id: "4", 
              className:  this.getClassNames('4'), 
              onClick:  this.handleClick}, 
              React.createElement("img", {src: "/images/sort-menu/padlock-unselected.png"}), 
              React.createElement("img", {src: "/images/sort-menu/heart-unselected.png", className: "selected"})
            )
          )
        )
      )
    );
  }

});

module.exports = SortMenu;
