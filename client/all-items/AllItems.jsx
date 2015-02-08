var React = require('react'),
    StateStreamMixin = require('rx-react').StateStreamMixin,

    AllItemsStore = require('./Store'),
    AllItemsActions = require('./Actions'),

    List = require('../list');

var AllItems = React.createClass({
  mixins: [StateStreamMixin],

  getStateStream: function() {
    return AllItemsStore;
  },

  componentDidMount: function() {
    AllItemsActions.fetchItems();
  },

  render: function() {
    return (
      <section>
        <div>
          <input
            type='text'
            value={ this.state.name }
            onChange={ AllItemsActions.setName }
            placeholder='New Item' />
        </div>
        <List items={ this.state.items }/>
      </section>
    );
  }
});
module.exports = AllItems;
