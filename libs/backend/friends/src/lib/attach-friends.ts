import { RequestHandler } from 'express';
import { MongoUser } from '@zack-live-stream/auth-utils';
import { MongoFriendship } from '@zack-live-stream/friendship-utils';
import { mongo } from '@zack-live-stream/backend/mongo';
import { Dictionary } from '@ngrx/entity';

export const attachFriends: RequestHandler = async (req, res, next) => {
  const user = (req as any).user as MongoUser;
  const acceptedFriendships = await mongo
    .collection<MongoFriendship>('friendships')
    .find({
      $and: [{ $or: [{ requestee: user._id }, { requester: user._id }] }],
    })
    .toArray();
  const users = (
    await mongo.collection<MongoUser>('users').find().toArray()
  ).reduce((acc, user) => {
    acc[user._id.toHexString()] = user;
    return acc;
  }, {} as Dictionary<MongoUser>);
  const friends = acceptedFriendships
    .filter((friendship) => friendship.accepted === 'accepted')
    .map((friendship) =>
      user._id.toHexString() === friendship.requestee.toHexString()
        ? friendship.requester.toHexString()
        : friendship.requestee.toHexString()
    )
    .map((friendId) => users[friendId]);
  const pendingRequests = acceptedFriendships
    .filter(
      (friendship) =>
        friendship.accepted === 'pending' &&
        friendship.requester.toHexString() === user._id.toHexString()
    )
    .map((friendship) => users[friendship.requestee.toHexString()]);
  const incomingRequests = acceptedFriendships
    .filter(
      (friendship) =>
        friendship.accepted === 'pending' &&
        friendship.requestee.toHexString() === user._id.toHexString()
    )
    .map((friendship) => users[friendship.requester.toHexString()]);
  const friendshipsByTheOtherUsersId = acceptedFriendships.reduce(
    (acc, friendship) => {
      const otherId =
        friendship.requestee.toHexString() === user._id.toHexString()
          ? friendship.requester.toHexString()
          : friendship.requestee.toHexString();
      acc[otherId] = friendship;
      return acc;
    },
    {} as Dictionary<MongoFriendship>
  );
  const findableFriends = Object.values(users).filter(
    (user) => !friendshipsByTheOtherUsersId[user._id.toHexString()]
  );
  req['friends'] = friends;
  req['pendingRequests'] = pendingRequests;
  req['incomingRequests'] = incomingRequests;
  req['findableFriends'] = findableFriends;
  next();
};
