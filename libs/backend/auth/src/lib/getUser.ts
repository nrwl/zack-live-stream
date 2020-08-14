import { RequestHandler } from 'express';
import { MongoUser } from '@zack-live-stream/auth-utils';

export const getUser: RequestHandler = (req, res) => {
  const user = (req as any).user as MongoUser;
  res.send(user);
};
