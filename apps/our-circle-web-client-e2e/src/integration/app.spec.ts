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
    cy.get('our-circle-content-post-list').contains('This is a test post');
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
  });

  it('login and see only friend posts', () => {
    cy.task('seedingForFriendsTest');
    cy.visit('/');
    getGreeting().contains('Our Circle');

    // logging into test user
    cy.get('#username').type('test username');
    cy.get('#password').type('test password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test name');

    // asserting only has access to friends
    cy.get('our-circle-friend-list').contains('test friend');
    cy.get('our-circle-friend-list').should('not.contain', 'test non-friend');
    cy.get('our-circle-content-post-list').contains('this should be visible');
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should not be visible'
    );

    // add a post
    cy.get('#createPost').type('This post was added during our test');
    cy.get('[e2e-tag="createPostButton"]').click();
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );

    // logout and back in as our friend user
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
    cy.get('#username').type('Test Friend');
    cy.get('#password').type('password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test friend');

    // assert they see all posts, including the newly made one
    cy.get('our-circle-friend-list').contains('test name');
    cy.get('our-circle-friend-list').should('not.contain', 'test non-friend');
    cy.get('our-circle-content-post-list').contains('this should be visible');
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should not be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );

    // logout and back in as our non friend user
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
    cy.get('#username').type('Not A Friend');
    cy.get('#password').type('password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test non-friend');

    // assert they see all posts, including the newly made one
    cy.get('our-circle-friend-list').should('not.contain', 'test name');
    cy.get('our-circle-friend-list').should('not.contain', 'test non-friend');
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'contain',
      'this should not be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'This post was added during our test'
    );
  });

  it('login and then refresh browser', () => {
    cy.task('seedingForFriendsTest');
    cy.visit('/');
    getGreeting().contains('Our Circle');

    // logging into test user
    cy.get('#username').type('test username');
    cy.get('#password').type('test password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test name');

    // asserting only has access to friends
    cy.get('our-circle-friend-list').contains('test friend');
    cy.get('our-circle-friend-list').should('not.contain', 'test non-friend');
    cy.get('our-circle-content-post-list').contains('this should be visible');
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should not be visible'
    );

    // add a post
    cy.get('#createPost').type('This post was added during our test');
    cy.get('[e2e-tag="createPostButton"]').click();
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );

    // refresh and re-assert
    cy.reload();
    cy.get('h2').contains('test name');
    cy.get('our-circle-friend-list').contains('test friend');
    cy.get('our-circle-friend-list').should('not.contain', 'test non-friend');
    cy.get('our-circle-content-post-list').contains('this should be visible');
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should not be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );
  });

  it('login to test user, add friend, logout and into requested friend and accept', () => {
    cy.task('seedingForFriendsTest');
    cy.visit('/');
    getGreeting().contains('Our Circle');

    // logging into test user
    cy.get('#username').type('test username');
    cy.get('#password').type('test password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test name');

    // asserting only has access to friends
    cy.get('our-circle-friend-list').contains('test friend');
    cy.get('our-circle-friend-list').should('not.contain', 'test non-friend');
    cy.get('our-circle-content-post-list').contains('this should be visible');
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should not be visible'
    );

    // add a post
    cy.get('#createPost').type('This post was added during our test');
    cy.get('[e2e-tag="createPostButton"]').click();
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );

    // assert we can see non-friend in find-friend component
    cy.get('our-circle-find-friends').contains('test non-friend');
    cy.get('our-circle-find-friends').should('not.contain', 'test friend');
    cy.get('our-circle-find-friends').should('not.contain', 'test name');
    cy.get('[e2e-tag="request-add-friend"]').click();
    cy.get('our-circle-pending-friendships').contains(
      'test non-friend is pending...'
    ); // we are here

    // logout and back in as our non friend user
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
    cy.get('#username').type('Not A Friend');
    cy.get('#password').type('password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test non-friend');

    // assert we can see friend-request and click to add friend
    cy.get('our-circle-incoming-requests').contains(
      'test name has requested your friendship!!!!'
    );
    cy.get('[e2e-tag="approve-friendship"').click();

    // assert we can see test user in our friend list and their content posts
    cy.get('our-circle-friend-list').contains('test name');
    cy.get('our-circle-friend-list').should('not.contain', 'test friend');
    cy.get('our-circle-find-friends').contains('test friend');
    cy.get('our-circle-content-post-list').should(
      'not.contain',
      'this should be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'this should not be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );

    // logout and back in as our non friend user
    cy.get('[e2e-tag="logoutButton"]').click();
    cy.get('our-circle-login');
    cy.get('#username').type('test username');
    cy.get('#password').type('test password');
    cy.get('[e2e-tag="login-submit"]').click();
    cy.get('h2').contains('test name');

    // asserting only has access to friends
    cy.get('our-circle-friend-list').contains('test friend');
    cy.get('our-circle-friend-list').contains('test non-friend');
    cy.get('our-circle-content-post-list').contains('this should be visible');
    cy.get('our-circle-content-post-list').contains(
      'this should also be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'this should not be visible'
    );
    cy.get('our-circle-content-post-list').contains(
      'This post was added during our test'
    );
  });
});
