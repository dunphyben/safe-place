var React = require('react'),
    StateStreamMixin = require('rx-react').StateStreamMixin;

var SortMenuStore = require('./Store.js');

var SortMenu = React.createClass({

  mixins: [StateStreamMixin],

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },

  /**
   * Initial state.
   */
  getStateStream: function() {
    return SortMenuStore;
  },

  /**
   * TODO: 
   * slideToggle and handleClick should be extracted into actions in ./Action.js
   */

  /**
   * Slide down the menu.
   */
  slideToggle: function() {
    this.setState({ isOpen: !this.state.isOpen });
  },

  /**
   * When clicked the clicked link should get the selected class and tell the
   * app to sort the current list of elements by the sortBy param.
   *
   * Note: This method is meant to be bound with the first argument set to a
   * sortBy string. Otherwise this will be called as a standard event handler
   * and the only arg passed will be the event obj.
   */
  handleClick: function(sortBy, e) {
    var link   = e.currentTarget;
    console.log('hey no sorting by %s!', sortBy); // Debug/Todo
    this.setState({ currentlySelected: link.id });
  },

  render: function() {

    // 'open' class determines whether the component is visible or not
    var classes = React.addons.classSet({
      'open': this.state.isOpen
    });

    return (
      <div id="sort-menu" className={classes}>
        <ul className='horizontal-menu table-list'>
          <li>
            <a
              id='1'
              className={ this.getClassNames('1') }
              onClick={ this.handleClick.bind(this, 'date') }>
              <span>Recent</span>
            </a>
          </li>
          <li>
            <a
              id='2'
              className={ this.getClassNames('2') }
              onClick={ this.handleClick.bind(this, 'alphabetical') }>
              <span>A-Z</span>
            </a>
          </li>
          <li>
            <a
              id='3'
              className={ this.getClassNames('3') }
              onClick={ this.handleClick.bind(this, 'favorites') }>
              <img src='/images/sort-menu/heart-unselected.png' />
              <img src='/images/sort-menu/heart-selected.png' className='selected' />
            </a>
          </li>
          <li>
            <a
              id='4'
              className={ this.getClassNames('4') }
              onClick={ this.handleClick.bind(this, 'locked') }>
              <img src='/images/sort-menu/padlock-unselected.png' />
              <img src='/images/sort-menu/padlock-selected.png' className='selected' />
            </a>
          </li>
        </ul>
        <button className="toggle" onClick={ this.slideToggle } />
      </div>
    );
  }

});

module.exports = SortMenu;
