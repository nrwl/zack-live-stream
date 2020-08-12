import { RequestHandler } from 'express';
import { MongoUser } from '@zack-live-stream/auth-utils';

export const getFriends: RequestHandler = (req, res) => {
  console.log('in getFriends');
  const friends = (req as any).friends as MongoUser[];
  console.log(friends);
  res.send(
    friends.map((friend) => ({
      id: friend._id.toHexString(),
      name: friend.name,
    }))
  );
};
