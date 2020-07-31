import { RequestHandler } from 'express';
import {
  CreateContentPostRequestBody,
  MongoContentPost,
} from 'libs/content-post-utils/src/lib/models';
import { mongo } from '@zack-live-stream/backend/mongo';

const AUTHOR_ID = '1';

export const createPost: RequestHandler = async (req, res) => {
  const { content } = req.body as CreateContentPostRequestBody;
  const newPost = {
    content,
    authorId: AUTHOR_ID,
    created: new Date(),
  };
  const id = (
    await mongo.collection<MongoContentPost>('content-posts').insertOne(newPost)
  ).insertedId.toHexString();
  res.send({
    content: newPost.content,
    authorId: newPost.authorId,
    created: newPost.created,
    id,
  });
};
