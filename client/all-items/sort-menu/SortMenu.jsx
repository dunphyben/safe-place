var React = require('react');

var SortMenu = React.createClass({

  getClassNames: function(i) {
    var selected = this.state.currentlySelected === i;
    return React.addons.classSet({
      'icon-button': true,
      'selected': selected
    });
  },
  
  getInitialState: function() {
    return {
      currentlySelected: '1',
      sortBy: 'date'
    };
  },

  handleClick: function(e) {

    var sortBy = e.currentTarget.getAttribute('data-sortBy');

    // Debug
    var obj = {
      'date': 'Recent',
      'alphabetical': 'A-Z',
      'favorites': 'Heart',
      'locked': 'Padlock'
    };

    console.log('hey no sorting by %s!', obj[sortBy]);
  },

  render: function() {
    return (
      <div id="sort-menu">
        <ul className='horizontal-menu'>
          <li>
            <a
              id='1'
              data-sortBy='date'
              className={ this.getClassNames('1') }
              onClick={ this.handleClick }>
              <span>Recent</span>
            </a>
          </li>
          <li>
            <a
              id='2'
              data-sortBy='alphabetical'
              className={ this.getClassNames('2') }
              onClick={ this.handleClick }>
              <span>A-Z</span>
            </a>
          </li>
          <li>
            <a
              id='3'
              className={ this.getClassNames('3') }
              onClick={ this.handleClick }>
              <img src='/images/sort-menu/heart-unselected.png' />
              <img src='/images/sort-menu/heart-unselected.png' className='selected' />
            </a>
          </li>
          <li>
            <a
              id='4'
              className={ this.getClassNames('4') }
              onClick={ this.handleClick }>
              <img src='/images/sort-menu/padlock-unselected.png' />
              <img src='/images/sort-menu/heart-unselected.png' className='selected' />
            </a>
          </li>
        </ul>
      </div>
    );
  }

});

module.exports = SortMenu;
