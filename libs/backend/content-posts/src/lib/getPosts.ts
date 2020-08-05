import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import {
  MongoContentPost,
  convertToContentPost,
} from '@zack-live-stream/content-post-utils';

export const getPosts: RequestHandler = async (req, res) => {
  const mongoPosts = await mongo
    .collection<MongoContentPost>('content-posts')
    .find()
    .toArray();
  console.log(mongoPosts);
  res.send(mongoPosts.map(convertToContentPost));
};
