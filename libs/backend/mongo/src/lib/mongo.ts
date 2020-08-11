import * as mongodb from 'mongodb';

const mongoClient = new mongodb.MongoClient('mongodb://127.0.0.1:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  poolSize: 5,
});

mongoClient.connect();

const databaseName = process.env['MONGO_DB_NAME'];

console.log(`Connecting to database with name: ${databaseName}`);

export const mongo = mongoClient.db(databaseName);
