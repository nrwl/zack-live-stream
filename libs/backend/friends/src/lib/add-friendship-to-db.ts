import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import { MongoFriendship } from '@zack-live-stream/friendship-utils';
import { MongoUser } from '@zack-live-stream/auth-utils';
import { ObjectId } from 'mongodb';

export const addFriendshipToDb: RequestHandler = async (req, res, next) => {
  const user = (req as any).user as MongoUser;
  const friendIdToRequest = req.body.userId as string;
  // NOTE: validate that friendship doesn't already exist between user and requestee
  await mongo.collection<MongoFriendship>('friendships').insertOne({
    requestee: new ObjectId(friendIdToRequest),
    requester: user._id,
    accepted: 'pending',
  });
  next();
};
