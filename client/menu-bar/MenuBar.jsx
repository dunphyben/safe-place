var React = require('react');

var MenuBar = React.createClass({

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

  /**
   * TODO...
   * We set the currently selected state just fine, but we need to navigate to
   * the correct view when clicked.
   */
  handleClick: function(e) {
    this.setState({ currentlySelected: e.currentTarget.id });
  },

  render: function() {
    return (
      <ul id='menu-bar' className='justify'>
        <li>
          <a id='1' className={this.getClassNames('1')} onClick={this.handleClick}>
            <img src='/images/deposit-item-unselected@3x.png' />
            <img src='/images/deposit-item-selected@3x.png'
                 className='selected' />
            <span>Deposit Item</span>
          </a>
        </li>
        <li>
          <a id='2' className={this.getClassNames('2')} onClick={this.handleClick}>
            <img src='/images/my-places-unselected@3x.png' />
            <img src='/images/my-places-selected@3x.png' className='selected' />
            <span>My Places</span>
          </a>
        </li>
        <li>
          <a id='3' className={this.getClassNames('3')} onClick={this.handleClick}>
            <img src='/images/all-items-unselected@3x.png' />
            <img src='/images/all-items-selected@3x.png' className='selected' />
            <span>All Items</span>
          </a>
        </li>
        <li>
          <a id='4' className={this.getClassNames('4')} onClick={this.handleClick}>
            <img src='/images/history-unselected@3x.png' />
            <img src='/images/history-selected@3x.png' className='selected' />
            <span>History</span>
          </a>
        </li>
      </ul>
    );
  }

});

module.exports = MenuBar;
