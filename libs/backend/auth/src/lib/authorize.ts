import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import { MongoAccessToken, User } from '@zack-live-stream/content-post-utils';
import { WithId } from 'mongodb';

export const authorize: RequestHandler = async (req, res, next) => {
  console.log(req.headers);
  const { authorization: accessTokenFromHeader } = req.headers as {
    authorization: string;
  };
  console.log(accessTokenFromHeader);
  if (!accessTokenFromHeader) {
    res.status(401).send('Unauthenticated');
    return;
  }
  const accessToken = await mongo
    .collection<MongoAccessToken>('accessToken')
    .findOne({
      accessToken: accessTokenFromHeader,
    });
  console.log(accessToken);
  if (!accessToken) {
    res.status(401).send('Unauthenticated');
    return;
  }
  const user = await mongo.collection<User>('users').findOne({
    _id: accessToken.userId,
  });
  if (!user) {
    res.status(500).send('Something went wrong');
    return;
  }
  console.log(user);
  (req as any).user = user;
  next();
};
