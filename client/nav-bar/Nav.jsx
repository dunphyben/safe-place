var React = require('react/addons'),
    cx = React.addons.classSet,
    debug = require('debug')('sp:nav:comp');

var NavBar = React.createClass({

  getInitialState: function() {
    debug('init');
    return {
      title: 'My Places',
      showBackButton: false
    };
  },

  _handleBackClick: function() {
    debug('back button');
    this.state({
      showBackButton: !this.state.showBackButton
    });
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
          onClick={ this._handleBackClick }>
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
