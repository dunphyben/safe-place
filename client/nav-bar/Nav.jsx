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

  render: function() {

    var title = this.state.title,
        showBackButton = this.state.showBackButton;

    var buttonClass = cx({
      'nav_button': true,
      'nav_button-hide': !showBackButton
    });

    return (
      <nav className='nav'>
        <div className={ buttonClass }>
          <p>back</p>
        </div>
        <div className='nav_title'>
          <p>{ title }</p>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
