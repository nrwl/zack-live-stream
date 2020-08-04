import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import { MongoUser, User } from '@zack-live-stream/content-post-utils';
import { createAccessToken } from './createAccessToken';

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const mongoUser = await mongo.collection<MongoUser>('users').findOne({
    username,
    password,
  });
  if (!mongoUser) {
    res.send({ result: 'error', reason: 'Invalid username or password.' });
    return;
  }
  const user: User = {
    id: mongoUser._id.toHexString(),
    name: mongoUser.name,
  };
  const accessToken = await createAccessToken(mongoUser);
  res.send({ result: 'success', accessToken, user });
};
