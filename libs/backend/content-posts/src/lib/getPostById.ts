import { RequestHandler } from 'express';
import { posts } from './posts';

export const getPostById: RequestHandler = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const matchingPost = posts.find((post) => post.id === id);
  if (matchingPost) {
    res.send(matchingPost);
  } else {
    res.status(404).send();
  }
};
