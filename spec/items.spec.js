describe('Item', function() {
  it('is initialized with a name, description, and image, and ' +
    'belonging to a place', function() {
    var testItem = Object.create(Item);
    var testPlace = Object.create(Place);
    testItem.setPlace('Home Closet');
    // Name is required
    testItem.setName('Passport');
    // description is optional
    testItem.setDescription('Brian\'s passport');
    // image is optional
    testItem.setImage('How do we test this?');
    testItem.name.should.equal('Passport');
    testItem.description.should.equal('Brian\'s passport');
    testItem.image.should.equal('How do we test this?');
  });
  it('does not require a description to be inputted', function() {
    var testItem = Object.create(Item);
    // Name is required
    testItem.setName('Passport');
    // description is optional
    testItem.setDescription('');
    // image is optional
    testItem.setImage('');
    testItem.name.should.equal('Passport');
    testItem.description.should.equal('');
    testItem.image.should.equal('');
  });

  describe('Item Image', function() {
    it('Sets the image to fill 100% width of the Item Card ' +
      'and be 250px down', function() {

      });
    it('sets a default image to be inputted on the Item Card if ' +
      'there is no image inputted', function() {
      var testItem = Object.create(Item);
      // Name is required
      testItem.setName('Passport');
      // description is optional
      testItem.setDescription('');
      // image is optional
      testItem.setImage('');
      testItem.name.should.equal('Passport');
      testItem.description.should.equal('defaultImage');
      testItem.image.should.equal('');
    });
    it('sets the aspect ratio for the image to 1.5\(x\) x 1\(y\))', function() {

    });
  });
});

describe('Item Views', function() {
  describe('Deposit Item', function() {
    it('displays a form with all the parameters to initialize an Item',
      function() {
      });
  });

  describe('All Items', function() {
    it('displays all the items by Item.name in text-list format', function() {
    });
    describe('sort', function() {
      it('drops down a menu a to a total length of 9.0% of the screen ' +
        'height when you click or pull on the tab', function() {
        });
      it('changes the tab\'s color from #CCCCCC to #003366 onClick' +
        'and also makes the menu the color #003366', function() {
        });
      it('populates the tab menu with sort items Recent, A-Z, ' +
        'Favorites (<3), and Locked', function() {
        });
      it('sorts the items by most recent when you click on Recent', function() {
      });
      it('sorts the items by A-Z when you click on A-Z', function() {
      });
      it('sorts the items by Favorites when you click the heart', function() {
      });
      it('sorts the items by your locked items ');
    });
  });


});
