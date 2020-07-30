import * as express from 'express';
import { getPosts } from './getPosts';
import { getPostById } from './getPostById';
import { createPost } from './createPost';
import * as bodyParser from 'body-parser';

export const router = express.Router();

router.use(bodyParser.json());
router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/create-post', createPost);
