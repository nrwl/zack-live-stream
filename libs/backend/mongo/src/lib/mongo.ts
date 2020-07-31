import * as mongodb from 'mongodb';

const mongoClient = new mongodb.MongoClient('mongodb://127.0.0.1:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  poolSize: 5,
});

mongoClient.connect();

export const mongo = mongoClient.db('our-circle');
