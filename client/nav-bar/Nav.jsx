var React = require('react/addons'),

    StateStreamMixin = require('rx-react').StateStreamMixin,
    NavStore = require('./Store'),
    NavActions = require('./Actions'),

    cx = React.addons.classSet,
    debug = require('debug')('sp:nav:comp');

var NavBar = React.createClass({
  mixins: [StateStreamMixin],

  getStateStream: function() {
    debug('init');
    return NavStore;
  },

  render: function() {
    var title = this.state.title,
        showBackButton = this.state.showBackButton;

    var buttonClass = cx({
      'nav_button': true,
      'nav_button-hide': !showBackButton
    });

    return (
      <nav className='nav'>
        <div
          className={ buttonClass }
          onClick={ NavActions.goBack }>
          <img src='images/chevron.png' />
        </div>
        <div className='nav_title'>
          <p>{ title }</p>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
