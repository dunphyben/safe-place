describe('History', function() {
  it('has two buttons at the top named "Logs" and "Withdrawn" that' +
    'toggles the view', function() {
    });
  describe('Logs', function() {
    it('displays the history of ALL items that have been deposited' +
      'and withdrawan, by most recent first', function() {
      });
  });

  describe('Withdrawn', function() {
    it('displays a list of all the items that have been withdrawn ' +
      'that do not belong to a place', function() {
      });
    it('displays a card view similar to the Place.items view ' +
       'starting with most recently withdrawn', function() {
      });
  });

  it('orders the items by most recent event (withdraw or deposit) ' +
     'to latest event', function() {
  });

  describe('Removed Items', function() {
    it('places items that are removed from a place by in the History container',
      function() {
      });
  });
});
