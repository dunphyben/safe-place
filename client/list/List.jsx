var React = require('react');

var List = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {

    var items = this.props.items.map(function(item) {
      return <li key={ item.name }>{ item.name }</li>;
    });

    return (
      <ul>
        { items }
      </ul>
    );
  }
});
module.exports = List;
