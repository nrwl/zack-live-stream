import * as express from 'express';
import { getPosts } from './getPosts';
import { getPostById } from './getPostById';
import { createPost } from './createPost';
import * as bodyParser from 'body-parser';
import { attachFriends } from '@zack-live-stream/backend/friends';

export const router = express.Router();

router.use(bodyParser.json());
router.get('/', attachFriends, getPosts);
router.get('/:id', attachFriends, getPostById);
router.post('/create-post', createPost);
