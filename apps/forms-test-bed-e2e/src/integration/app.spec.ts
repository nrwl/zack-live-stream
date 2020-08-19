import { getGreeting } from '../support/app.po';

describe('forms-test-bed', () => {
  beforeEach(() => cy.visit('/'));

  it('should see our form', () => {
    cy.get('zack-live-stream-pagination');
  });
});
