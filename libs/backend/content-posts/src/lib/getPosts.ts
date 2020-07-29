import { RequestHandler } from 'express';
import { posts } from './posts';

export const getPosts: RequestHandler = (req, res) => {
  res.send(posts);
};
