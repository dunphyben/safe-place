/////////////////
//PLACE
/////////////////

describe('Place', function() {
	it("has a name", function() {
		var testPlace = Object.create(Place);
		testPlace.setName("Home Closet");
		testPlace.name.should.equal("Home Closet");
	});
	it("starts out with no items", function() {
		var testPlace = Object.create(Place);
		testPlace.initialize();
		testPlace.items.should.eql([]);
	});
	it("can have many items", function() {

	});
});

/////////////////
//PLACE VIEWS
/////////////////

describe('Place Views', function() {
	describe('My Places', function() {
		it("lists all of the places (Place.name) in the myPlaces view", function() {

		});
		describe('View Place', function() {
			it("takes me to the Place.items when onClick(Place.name) from the My Places list view", function() {

			});
		});
	});

	describe('Place.items', function() {
		it("shows all of the items that belong to a place", function() {

		});
		it("displays all of the items as cards with their title and image", function() {

		});
		it("allows you to scroll through all the cards in the list", function() {

		});
		it("displays all the cards tilted at a _______ degrees", function() {

		});
		it("removes an item from the place when you swipe it to the left", function() {

		});
		it("takes you to Item.view when you click on a specific item's card", function() {

		});
	});
});

/////////////////
//ITEM
/////////////////

describe('Item', function() {
	it("is initialized with a name, description, and image, and belonging to a place", function() {
		var testItem = Object.create(Item);
		var testPlace = Object.create(Place);
		testItem.setPlace("Home Closet");
		testItem.setName("Passport"); // Name is required
		testItem.setDescription("Brian's passport"); // description is optional
		testItem.setImage("How do we test this?"); // image is optional
		testItem.name.should.equal("Passport");
		testItem.description.should.equal("Brian's passport");
		testItem.image.should.equal("How do we test this?");
	});
	it("does not require a description to be inputted", function() {
		var testItem = Object.create(Item);
		testItem.setName("Passport"); // Name is required
		testItem.setDescription(""); // description is optional
		testItem.setImage(""); // image is optional
		testItem.name.should.equal("Passport");
		testItem.description.should.equal("");
		testItem.image.should.equal("");
	});

	describe('Item Image', function() {
		it("Sets the image to fill 100% width of the Item Card and be 250px down", function() {

		});
		it("sets a default image to be inputted on the Item Card if there is no image inputted", function() {
			var testItem = Object.create(Item);
			testItem.setName("Passport"); // Name is required
			testItem.setDescription(""); // description is optional
			testItem.setImage(""); // image is optional
			testItem.name.should.equal("Passport");
			testItem.description.should.equal("defaultImage");
			testItem.image.should.equal("");
		});
	});


});

/////////////////
//ITEM VIEWS
/////////////////

describe('Item Views', function() {
	describe('Deposit Item', function() {
		it('displays a form with all the parameters to initialize an Item', function() {

		});
	});

	describe('All Items', function() {
		it('displays all the items by Item.name in text-list format', function() {

		});
		describe('sort', function() {
			it('drops down a menu a to a total length of 9.0% of the screen height when you click or pull on the tab', function() {

			});
			it('changes the tab\'s color from #CCCCCC to #003366 onClick and also makes the menu the color #003366', function() {

			});
			it('populates the tab menu with sort items Recent, A-Z, Favorites (<3), and Locked', function() {

			});
			it('sorts the items by most recent when you click on Recent', function() {

			});
			it('sorts the items by A-Z when you click on A-Z', function() {

			});
			it('sorts the items by Favorites when you click the heart', function() {

			});
			it('sorts the items by your locked items ')
		})
	});


});

/////////////////
//HISTORY
/////////////////

describe('History', function() {
	it('has two buttons at the top named "Logs" and "Withdrawn" that toggles the view', function() {

	});
	describe('Logs', function() {
		it('displays the history of ALL items that have been deposited and withdrawan, by most recent first', function() {

		});
	});
	describe('Withdrawn', function() {
		it('displays a list of all the items that have been withdrawn that do not belong to a place', function() {

		});
		it('displays a card view similar to the Place.items view starting with most recently withdrawn', function() {

		});
	});
	
	it('orders the items by most recent event (withdraw or deposit) to latest event', function() {

	});

	describe('Removed Items', function() {
		it('places items that are removed from a place by in the History container')
	})
});

/////////////////
//TAB BUTTONS (BOTTOM MENU)
/////////////////

describe('Tab Buttons', function() {
	describe('Deposit Item', function() {
		it('Brings you to the Deposit Item View onClick', function() {

		});
		it('changes the icon from deposit-item-unselected to deposit-item-selected onClick', function() {

		});
		it('changes the icon to deposit-item-unselected when click away from the Deposit Item View screen', function() {

		});
	});

	describe('My Places Button', function() {
		it('Brings you to the My Places View onClick', function() {

		});
		it('changes the icon from my-places-unselected to my-places-selected onClick', function() {

		});
		it('changes the icon to my-places-unselected when click away from the My Places View screen', function() {

		});
	});

	describe('All Items Button', function() {
		it('Brings you to the All Items View onClick', function() {

		});
		it('changes the icon from all-items-unselected to all-items-selected onClick', function() {

		});
		it('changes the icon to all-items-unselected when click away from the All Items View screen', function() {

		});
	});

	describe('History Button', function() {
		it('Brings you to the History View onClick', function() {

		});
		it('changes the icon from history-unselected to history-selected onClick', function() {

		});
		it('changes the icon to history-unselected when click away from the History View screen', function() {

		});
	});
});

/////////////////
//TRANSITIONS
/////////////////

// Transitions (see http://demo.touchstonejs.io and click on "Transitions")
	// Splash Screen → Login Screen: Fade
	// Reveal Sort Tab: Show from Top (not full-page transition -- possible?)
	// Hide Sort Tab: Show From Bottom (not full-page transition -- possible?)
	// Going Back: Show from Left
	// Going Forward (All other click events): None
	// View Item Logs: Show From Bottom
	// Close Item Logs: Show From Top
	// If ( enterNewInstanceFromList === true ) { 
	// prompt editing of field within the list (i.e. no immediate transition)
	// keyboard should display “next” where “enter” should be
	// pressing “next” will Show From Right the next screen (Deposit Item or Create Place) }
	// If (depositItemFromExistingList) { Item.place.should.eq(this.name) }
	// Click on Item within Place (tilted cards): CSS3 Transition






