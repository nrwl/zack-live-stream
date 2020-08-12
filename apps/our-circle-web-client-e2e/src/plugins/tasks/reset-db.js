import { mongo } from './mongo';

export async function resetDb() {
  await mongo.dropDatabase();
  return null;
}
