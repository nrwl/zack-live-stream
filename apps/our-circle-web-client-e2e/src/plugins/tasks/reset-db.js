const { mongo } = require('./mongo');

module.exports.resetDb = async function resetDb() {
  await mongo.dropDatabase();
  return null;
};
