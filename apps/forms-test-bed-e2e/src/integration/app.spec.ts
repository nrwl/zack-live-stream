// TODO: Write better tests!!!
// Should get array of pagination-option contents
// and assert it is exactly what we want it to be.

describe('forms-test-bed', () => {
  beforeEach(() => cy.visit('/'));

  it('when clicking a page button, value should update', () => {
    cy.get('zack-live-stream-pagination');
    cy.get('[e2e-tag="value"]').contains('1');
    cy.get('.selected').contains('1');
    cy.contains('4').click();
    cy.get('[e2e-tag="value"]').contains('4');
    cy.get('.selected').contains('4');
  });

  it('when more than 5 total pages, should star to see ellipses', () => {
    // init
    cy.get('zack-live-stream-pagination');
    cy.get('[e2e-tag="value"]').contains('1');
    cy.get('.selected').contains('1');
    cy.get('#totalPages').clear().type('10');

    // click last
    cy.get('[e2e-tag="last-button"]').contains('...10'); // TODO: Better selector!!
    cy.get('[e2e-tag="last-button"]').click();
    cy.get('[e2e-tag="value"]').contains('10');
    cy.get('.selected').contains('10');

    // click first
    cy.get('[e2e-tag="first-button"]').contains('1...'); // TODO: Better selector!!
    cy.get('[e2e-tag="first-button"]').click();
    cy.get('[e2e-tag="value"]').contains('1');
    cy.get('[e2e-tag="value"]').should('not.contain', '10');
    cy.get('.selected').contains('1');
    cy.get('.selected').should('not.contain', '10');
  });

  it('when more than 5 total pages, when option selected in the middle, should see ellipses when appropriate', () => {
    // init
    cy.get('zack-live-stream-pagination');
    cy.get('[e2e-tag="value"]').contains('1');
    cy.get('.selected').contains('1');
    cy.get('#totalPages').clear().type('10');

    // click in middle
    cy.contains('5').click();
    cy.get('[e2e-tag="value"]').contains('5');
    cy.get('.selected').contains('5');
    cy.get('[e2e-tag="first-button"]').contains('1...');
    cy.get('[e2e-tag="last-button"]').contains('...10');

    // click on 7
    cy.contains('7').click();
    cy.get('[e2e-tag="value"]').contains('7');
    cy.get('.selected').contains('7');
    cy.get('[e2e-tag="first-button"]').contains('1...');
    cy.get('[e2e-tag="last-button"]').contains('10');
    cy.get('[e2e-tag="last-button"]').should('not.contain', '...10');

    // click on 4
    cy.contains('5').click();
    cy.contains('4').click();
    cy.get('[e2e-tag="value"]').contains('4');
    cy.get('.selected').contains('4');
    cy.get('[e2e-tag="first-button"]').contains('1');
    cy.get('[e2e-tag="first-button"]').should('not.contain', '1...');
    cy.get('[e2e-tag="last-button"]').contains('10');
  });
});
