// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');
const mongodb = require('mongodb');
import { resetDb } from './tasks/reset-db';
import { addTestUser } from './tasks/add-test-user';
import { seedingForFriendsTest } from './tasks/seeding-for-friends-test';

const mongoClient = new mongodb.MongoClient('mongodb://127.0.0.1:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  poolSize: 5,
});

mongoClient.connect();
const mongo = mongoClient.db('our-circle-e2e');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // Preprocess Typescript file using Nx helper
  on('file:preprocessor', preprocessTypescript(config));
  on('task', {
    resetDb,
    addTestUser,
    seedingForFriendsTest,
  });
};
