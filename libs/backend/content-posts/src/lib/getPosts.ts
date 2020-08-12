import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import {
  MongoContentPost,
  convertToContentPost,
} from '@zack-live-stream/content-post-utils';
import { MongoUser } from '@zack-live-stream/auth-utils';

export const getPosts: RequestHandler = async (req, res) => {
  const user = (req as any).user as MongoUser;
  const friends = (req as any).friends as MongoUser[];
  const acceptableAuthorIds = [user].concat(friends).map((user) => user._id);
  const mongoPosts = await mongo
    .collection<MongoContentPost>('content-posts')
    .find({ $or: acceptableAuthorIds.map((id) => ({ authorId: id })) })
    .toArray();
  res.send(mongoPosts.map(convertToContentPost));
};
