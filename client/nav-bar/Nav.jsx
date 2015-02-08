var React = require('react/addons'),
    cx = React.addons.classSet;

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      title: 'my places',
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
      <nav>
        <div className={ buttonClass }>
          <p>back</p>
        </div>
        <h1>{ title }</h1>
      </nav>
    );
  }
});
module.exports = NavBar;
