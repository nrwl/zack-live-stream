import * as express from 'express';
import { getFriends } from './get-friends';
import { attachFriends } from './attach-friends';

export const router = express.Router();

router.get('/', attachFriends, getFriends);
