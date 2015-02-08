var React            = require('react'),
    StateStreamMixin = require('rx-react').StateStreamMixin,
    MenuBarStore     = require('./Store'),
    MenuBarActions   = require('./Actions');

var MenuBar = React.createClass({

  mixins: [StateStreamMixin],

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },

  getStateStream: function() {
    return MenuBarStore;
  },

  render: function() {
    return (
      <ul id='menu-bar' className='horizontal-menu'>
        <li>
          <a
            id='1'
            className={ this.getClassNames('1') }
            onClick={ MenuBarActions.setSelected }>
            <img src='/images/deposit-item-unselected@3x.png' />
            <img src='/images/deposit-item-selected@3x.png' className='selected' />
            <span>Deposit Item</span>
          </a>
        </li>
        <li>
          <a
            id='2'
            className={ this.getClassNames('2') }
            onClick={ MenuBarActions.setSelected }>
            <img src='/images/my-places-unselected@3x.png' />
            <img src='/images/my-places-selected@3x.png' className='selected' />
            <span>My Places</span>
          </a>
        </li>
        <li>
          <a
            id='3'
            className={ this.getClassNames('3') }
            onClick={ MenuBarActions.setSelected }>
            <img src='/images/all-items-unselected@3x.png' />
            <img src='/images/all-items-selected@3x.png' className='selected' />
            <span>All Items</span>
          </a>
        </li>
        <li>
          <a
            id='4'
            className={ this.getClassNames('4') }
            onClick={ MenuBarActions.setSelected }>
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
