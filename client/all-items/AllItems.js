var React = require('react'),
    StateStreamMixin = require('rx-react').StateStreamMixin,

    AllItemsStore = require('./Store'),
    AllItemsActions = require('./Actions'),

    List = require('../list');

var AllItems = React.createClass({displayName: "AllItems",
  mixins: [StateStreamMixin],

  getStateStream: function() {
    return AllItemsStore;
  },

  componentDidMount: function() {
    AllItemsActions.fetchItems();
  },

  render: function() {
    return (
      React.createElement("section", null, 
        React.createElement("div", {className: "list-item"}, 
          React.createElement("div", {className: "item-inner"}, 
            React.createElement("label", {className: "item-content"}, 
              React.createElement("input", {
                type: "text", 
                className: "field", 
                value:  this.state.name, 
                onChange:  AllItemsActions.setName, 
                placeholder: "New Item"})
            )
          )
        ), 
        React.createElement(List, {items:  this.state.items})
      )
    );
  }
});
module.exports = AllItems;
