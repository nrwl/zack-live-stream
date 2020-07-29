import * as express from 'express';
import { getPosts } from './getPosts';

export const router = express.Router();

router.get('', getPosts);
