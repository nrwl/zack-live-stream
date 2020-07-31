import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import { ObjectId } from 'mongodb';
import {
  MongoContentPost,
  convertToContentPost,
} from '@zack-live-stream/content-post-utils';

export const getPostById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const matchingPost = await mongo
    .collection<MongoContentPost>('content-posts')
    .findOne({
      _id: new ObjectId(id),
    });
  if (matchingPost) {
    res.send(convertToContentPost(matchingPost));
  } else {
    res.status(404).send();
  }
};
