import { RequestHandler } from 'express';
import {
  CreateContentPostRequestBody,
  MongoContentPost,
} from 'libs/content-post-utils/src/lib/models';
import { mongo } from '@zack-live-stream/backend/mongo';
import { MongoUser } from '@zack-live-stream/auth-utils';

export const createPost: RequestHandler = async (req, res) => {
  const { content } = req.body as CreateContentPostRequestBody;
  const user = (req as any).user as MongoUser;
  const newPost = {
    content,
    authorId: user._id,
    created: new Date(),
  };
  const id = (
    await mongo.collection<MongoContentPost>('content-posts').insertOne(newPost)
  ).insertedId.toHexString();
  res.send({
    content: newPost.content,
    authorId: newPost.authorId.toHexString(),
    created: newPost.created,
    id,
  });
};
