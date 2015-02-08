var React = require('react');

var List = React.createClass({displayName: "List",
  getInitialState: function() {
    return {};
  },

  render: function() {

    var items = this.props.items.map(function(item) {
      return React.createElement("li", {key:  item.name},  item.name);
    });

    return (
      React.createElement("ul", null, 
        items 
      )
    );
  }
});
module.exports = List;
