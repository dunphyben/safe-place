var React = require('react');

var List = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {

    var items = this.props.items.map(function(item) {
      return (
        <li
          key={ item.name }
          className='list-item'>
          <div className='item-inner'>
            { item.name }
          </div>
        </li>
      );
    });

    return (
      <ul>
        { items }
      </ul>
    );
  }
});
module.exports = List;
