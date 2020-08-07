import { RequestHandler } from 'express';
import { MongoUser, MongoAccessToken } from '@zack-live-stream/auth-utils';
import { mongo } from '@zack-live-stream/backend/mongo';

export const logout: RequestHandler = async (req, res) => {
  const user = (req as any).user as MongoUser;
  const result = await mongo
    .collection<MongoAccessToken>('accessTokens')
    .deleteMany({
      userId: user._id,
    });
  console.log(`Deleted ${result.deletedCount} access tokens.`);
  res.status(200).send();
};
