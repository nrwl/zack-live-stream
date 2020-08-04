import { mongo } from '@zack-live-stream/backend/mongo';
import {
  MongoAccessToken,
  MongoUser,
} from '@zack-live-stream/content-post-utils';
import { v4 as uuid } from 'uuid';

export const createAccessToken = async (user: MongoUser) => {
  const accessToken = uuid();
  await mongo.collection<MongoAccessToken>('accessToken').insertOne({
    userId: user._id,
    accessToken,
    createdAt: new Date(),
  });
  return accessToken;
};
