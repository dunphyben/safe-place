var React = require('react');

var MenuBar = React.createClass({

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
      <ul id='main-nav' className='justify'>
        <li>
          <a id={1} className='icon-button' onClick={this.handleClick}>
            <img src='/images/deposit-item-unselected@3x.png' />
            <img src='/images/deposit-item-selected@3x.png' className='selected' />
            <span>Deposit Item</span>
          </a>
        </li>
        <li>
          <a id={2} className='icon-button' onClick={this.handleClick}>
            <img src='/images/all-items-unselected@3x.png' />
            <img src='/images/all-items-selected@3x.png' className='selected' />
            <span>My Places</span>
          </a>
        </li>
        <li>
          <a id={3} className='icon-button' onClick={this.handleClick}>
            <img src='/images/history-unselected@3x.png' />
            <img src='/images/history-selected@3x.png' className='selected' />
            <span>All Items</span>
          </a>
        </li>
        <li>
          <a id={4} className='icon-button' onClick={this.handleClick}>
            <img src='/images/my-places-unselected@3x.png' />
            <img src='/images/my-places-selected@3x.png' className='selected' />
            <span>History</span>
          </a>
        </li>
      </ul>
    );
  }

});

module.exports = MenuBar;
