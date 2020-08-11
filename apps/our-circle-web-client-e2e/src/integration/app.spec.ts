import { getGreeting } from '../support/app.po';

describe('our-circle-web-client', () => {
  beforeEach(() => {
    cy.task('resetDb');
  });

  it('login and create a post', () => {
    cy.task('addTestUser');
    cy.visit('/');
    getGreeting().contains('Our Circle');
    cy.get('#username').type('test username');
    cy.get('#password').type('test password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test name');
    cy.get('#createPost').type('This is a test post');
    cy.get('[e2e-tag="createPostButton"]').click();
    cy.get('pre').contains('This is a test post');
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
  });
});
