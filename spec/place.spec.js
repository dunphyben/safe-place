describe('Place', function() {
  it('has a name', function() {
    var testPlace = Object.create(Place);
    testPlace.setName('Home Closet');
    testPlace.name.should.equal('Home Closet');
  });
  it('starts out with no items', function() {
    var testPlace = Object.create(Place);
    testPlace.initialize();
    testPlace.items.should.eql([]);
  });
  it('can have many items', function() {
  });
});

describe('Place Views', function() {
  describe('My Places', function() {
    it('lists all of the places (Place.name) in the myPlaces view', function() {

    });
    describe('View Place', function() {
      it('takes me to the Place.items when onClick(Place.name)' +
        'from the My Places list view', function() {

        });
    });
  });

  describe('Place.items', function() {
    it('shows all of the items that belong to a place', function() {

    });
    it('displays all of the items as cards with their title and image',
      function() {
      });

    it('allows you to scroll through all the cards in the list', function() {
    });

    it('displays all the cards tilted at a _______ degrees',
      function() {
      });
    it('removes an item from the place when you swipe it to the left',
      function() {
      });
    it('takes you to Item.view when you click on a specific item\'s card',
       function() {
      });
  });
});
