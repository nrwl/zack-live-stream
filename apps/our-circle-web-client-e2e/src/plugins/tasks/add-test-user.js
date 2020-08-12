import { mongo } from './mongo';

export async function addTestUser() {
  await mongo.collection('users').insertOne({
    username: 'test username',
    name: 'test name',
    password: 'test password',
  });
  return null;
}
