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
        <div className='list-item'>
          <div className='item-inner'>
            <label className='item-content'>
              <input
                type='text'
                className='field'
                value={ this.state.name }
                onChange={ AllItemsActions.setName }
                placeholder='New Item' />
            </label>
          </div>
        </div>
        <List items={ this.state.items }/>
      </section>
    );
  }
});
module.exports = AllItems;
