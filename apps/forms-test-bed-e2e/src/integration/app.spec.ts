// TODO: Write better tests!!!
// Should get array of pagination-option contents
// and assert it is exactly what we want it to be.

describe('forms-test-bed', () => {
  // describe('pagination', () => {
  //   beforeEach(() => cy.visit('/pagination'));

  //   it('when clicking a page button, value should update', () => {
  //     cy.get('zack-live-stream-pagination');
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.contains('4').click();
  //     cy.get('[e2e-tag="value"]').contains('4');
  //     cy.get('.selected').contains('4');
  //   });

  //   it('when more than 5 total pages, should star to see ellipses', () => {
  //     // init
  //     cy.get('zack-live-stream-pagination');
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.get('#totalPages').clear().type('10');

  //     // click last
  //     cy.get('[e2e-tag="last-button"]').contains('...10'); // TODO: Better selector!!
  //     cy.get('[e2e-tag="last-button"]').click();
  //     cy.get('[e2e-tag="value"]').contains('10');
  //     cy.get('.selected').contains('10');

  //     // click first
  //     cy.get('[e2e-tag="first-button"]').contains('1...'); // TODO: Better selector!!
  //     cy.get('[e2e-tag="first-button"]').click();
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('[e2e-tag="value"]').should('not.contain', '10');
  //     cy.get('.selected').contains('1');
  //     cy.get('.selected').should('not.contain', '10');
  //   });

  //   it('when more than 5 total pages, when option selected in the middle, should see ellipses when appropriate', () => {
  //     // init
  //     cy.get('zack-live-stream-pagination');
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.get('#totalPages').clear().type('10');

  //     // click in middle
  //     cy.contains('5').click();
  //     cy.get('[e2e-tag="value"]').contains('5');
  //     cy.get('.selected').contains('5');
  //     cy.get('[e2e-tag="first-button"]').contains('1...');
  //     cy.get('[e2e-tag="last-button"]').contains('...10');

  //     // click on 7
  //     cy.contains('7').click();
  //     cy.get('[e2e-tag="value"]').contains('7');
  //     cy.get('.selected').contains('7');
  //     cy.get('[e2e-tag="first-button"]').contains('1...');
  //     cy.get('[e2e-tag="last-button"]').contains('10');
  //     cy.get('[e2e-tag="last-button"]').should('not.contain', '...10');

  //     // click on 4
  //     cy.contains('5').click();
  //     cy.contains('4').click();
  //     cy.get('[e2e-tag="value"]').contains('4');
  //     cy.get('.selected').contains('4');
  //     cy.get('[e2e-tag="first-button"]').contains('1');
  //     cy.get('[e2e-tag="first-button"]').should('not.contain', '1...');
  //     cy.get('[e2e-tag="last-button"]').contains('10');
  //   });

  //   it('clicking prev and next adjusts value and these buttons disable correctly', () => {
  //     cy.get('zack-live-stream-pagination');
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.contains('Next').click();
  //     cy.get('[e2e-tag="value"]').contains('2');
  //     cy.get('.selected').contains('2');
  //     cy.contains('Next').click();
  //     cy.get('[e2e-tag="value"]').contains('3');
  //     cy.get('.selected').contains('3');
  //     cy.contains('Next').click();
  //     cy.get('[e2e-tag="value"]').contains('4');
  //     cy.get('.selected').contains('4');
  //     cy.contains('Next').click();
  //     cy.get('[e2e-tag="value"]').contains('5');
  //     cy.get('.selected').contains('5');
  //     cy.contains('Next').should('be.disabled');

  //     cy.contains('Previous').click();
  //     cy.get('[e2e-tag="value"]').contains('4');
  //     cy.get('.selected').contains('4');
  //     cy.contains('Previous').click();
  //     cy.get('[e2e-tag="value"]').contains('3');
  //     cy.get('.selected').contains('3');
  //     cy.contains('Previous').click();
  //     cy.get('[e2e-tag="value"]').contains('2');
  //     cy.get('.selected').contains('2');
  //     cy.contains('Previous').click();
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.contains('Previous').should('be.disabled');
  //   });

  //   it('should disable both prev and next when total pages is 1', () => {
  //     cy.get('zack-live-stream-pagination');
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.get('#totalPages').clear().type('1');
  //     cy.contains('Next').should('be.disabled');
  //     cy.contains('Previous').should('be.disabled');
  //   });

  //   it('should behave reasonably if the total pages changes to a value smaller than the current page', () => {
  //     cy.get('zack-live-stream-pagination');
  //     cy.get('[e2e-tag="value"]').contains('1');
  //     cy.get('.selected').contains('1');
  //     cy.contains('5').click();
  //     cy.get('[e2e-tag="value"]').contains('5');
  //     cy.get('.selected').contains('5');
  //     // probably better to figure out ctlr-all or select all to remove intermediate state
  //     cy.get('#totalPages').clear().type('2');
  //     cy.get('[e2e-tag="last-button"]').should('not.exist');
  //   });
  // });

  describe('paginator', () => {
    beforeEach(() => cy.visit('/paginator'));

    it('should work', () => {
      cy.get('zack-live-stream-paginator');
    });
  });
});
