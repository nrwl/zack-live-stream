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
  const pendingRequests = (req as any).pendingRequests as MongoUser[];
  const incomingRequests = (req as any).incomingRequests as MongoUser[];
  const findableFriends = (req as any).findableFriends as MongoUser[];

  res.send({
    friends: friends.map(mongoUserToSendableUser),
    pendingRequests: pendingRequests.map(mongoUserToSendableUser),
    incomingRequests: incomingRequests.map(mongoUserToSendableUser),
    findableFriends: findableFriends.map(mongoUserToSendableUser),
  });
};
