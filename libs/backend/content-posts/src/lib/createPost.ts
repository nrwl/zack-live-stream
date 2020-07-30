import { RequestHandler } from 'express';
import { CreateContentPostRequestBody } from 'libs/content-post-utils/src/lib/models';
import { posts } from './posts';

const AUTHOR_ID = '1';
let postCounter = 1;

export const createPost: RequestHandler = (req, res) => {
  console.log(req.body);
  const { content } = req.body as CreateContentPostRequestBody;
  const newPost = {
    content,
    id: `${++postCounter}`,
    authorId: AUTHOR_ID,
    created: new Date(),
  };
  posts.push(newPost);
  res.send(newPost);
};
