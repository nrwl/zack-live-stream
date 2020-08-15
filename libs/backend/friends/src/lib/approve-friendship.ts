import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import { MongoFriendship } from '@zack-live-stream/friendship-utils';
import { MongoUser } from '@zack-live-stream/auth-utils';
import { ObjectId } from 'mongodb';

export const approveFriendship: RequestHandler = async (req, res, next) => {
  const user = (req as any).user as MongoUser;
  console.log(user);
  const friendIdToApprove = req.body.userId as string;
  console.log(`friendIdToApprove: ${friendIdToApprove}`);
  // NOTE: validate that friendship doesn't already exist between user and requestee
  const friendship = await mongo
    .collection<MongoFriendship>('friendships')
    .findOne({
      requestee: user._id,
      requester: new ObjectId(friendIdToApprove),
      accepted: 'pending',
    });
  const friendships = await mongo
    .collection<MongoFriendship>('friendships')
    .find()
    .toArray();
  console.log(friendships);
  if (!friendship) {
    res.status(404).send();
    return;
  }
  await mongo.collection<MongoFriendship>('friendships').updateOne(
    {
      requestee: user._id,
      requester: new ObjectId(friendIdToApprove),
      accepted: 'pending',
    },
    { $set: { accepted: 'accepted' } }
  );
  next();
};
