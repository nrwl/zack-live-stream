import * as express from 'express';
import { getPosts } from './getPosts';
import { getPostById } from './getPostById';
import { createPost } from './createPost';
import * as bodyParser from 'body-parser';
import { authorize } from '@zack-live-stream/backend/auth';

export const router = express.Router();

router.use(bodyParser.json());
router.use(authorize);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/create-post', createPost);
