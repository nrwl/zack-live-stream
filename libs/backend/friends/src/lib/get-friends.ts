import { RequestHandler } from 'express';
import { MongoUser } from '@zack-live-stream/auth-utils';
import { mongo } from '@zack-live-stream/backend/mongo';
import { MongoFriendship } from '@zack-live-stream/friendship-utils';

const mongoUserToSendableUser = (user) => ({
  id: user._id.toHexString(),
  name: user.name,
});

export const getFriends: RequestHandler = async (req, res) => {
  const user = (req as any).user as MongoUser;
  const friends = (req as any).friends as MongoUser[];
  const friendRequestRelationships = await mongo
    .collection<MongoFriendship>('friendships')
    .find({
      $and: [{ requestee: user._id }, { accepted: false }],
    })
    .toArray();
  let friendRequests: MongoUser[] = [];
  if (friendRequestRelationships.length) {
    friendRequests = await mongo
      .collection<MongoUser>('users')
      .find({
        $or: friendRequestRelationships.map((relationship) => ({
          _id: relationship.requester,
        })),
      })
      .toArray();
  }
  const nonFriends = await mongo
    .collection<MongoUser>('users')
    .find({
      _id: { $nin: friends.map((friend) => friend._id) },
      // $and: friends.map((friend) => ({ $not: { _id: friend._id } })),
    })
    .toArray();
  const pendingFriendships = await mongo
    .collection<MongoFriendship>('friendships')
    .find({
      $or: [{ requestee: user._id }, { requestor: user._id }],
    })
    .toArray();
  const pendingFriendIds = pendingFriendships.map((friendship) =>
    friendship.requestee === user._id
      ? friendship.requester
      : friendship.requestee
  );
  const findableFriends = nonFriends.filter(
    (friend) =>
      !pendingFriendIds.includes(friend._id) &&
      friend._id.toHexString() !== user._id.toHexString()
  );
  res.send({
    friends: friends.map(mongoUserToSendableUser),
    friendRequests: friendRequests.map(mongoUserToSendableUser),
    findableFriends: findableFriends.map(mongoUserToSendableUser),
  });
};
