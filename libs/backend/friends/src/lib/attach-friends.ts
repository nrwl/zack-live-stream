import { RequestHandler } from 'express';
import { MongoUser } from '@zack-live-stream/auth-utils';
import { MongoFriendship } from '@zack-live-stream/friendship-utils';
import { mongo } from '@zack-live-stream/backend/mongo';

export const attachFriends: RequestHandler = async (req, res, next) => {
  const user = (req as any).user as MongoUser;
  const acceptedFriendships = await mongo
    .collection<MongoFriendship>('friendships')
    .find({
      $and: [
        { accepted: true },
        { $or: [{ requestee: user._id }, { requester: user._id }] },
      ],
    })
    .toArray();
  const friendIds = acceptedFriendships.map((friendship) =>
    friendship.requestee.toHexString() === user._id.toHexString()
      ? friendship.requester
      : friendship.requestee
  );
  if (friendIds.length) {
    const friends = await mongo
      .collection<MongoUser>('users')
      .find({
        $or: friendIds.map((friendId) => ({ _id: friendId })),
      })
      .toArray();
    req['friends'] = friends;
  } else {
    req['friends'] = [];
  }
  next();
};
