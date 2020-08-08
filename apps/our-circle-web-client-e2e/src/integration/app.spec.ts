import { getGreeting } from '../support/app.po';
import { mongo } from '@zack-live-stream/backend/mongo';

describe('our-circle-web-client', () => {
  beforeEach(async () => {
    await mongo.collection('content-posts').drop();
    cy.visit('/');
  });

  it('login and create a post', () => {
    getGreeting().contains('Our Circle');
    cy.get('#username').type('Zack');
    cy.get('#password').type('password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('Zack DeRose');
    cy.get('#createPost').type('This is a test post');
    cy.get('[e2e-tag="createPostButton"]').click();
    cy.get('pre').contains('This is a test post');
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
  });
});
