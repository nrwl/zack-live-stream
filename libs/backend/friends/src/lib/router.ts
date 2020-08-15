import * as express from 'express';
import { getFriends } from './get-friends';
import { attachFriends } from './attach-friends';
import { addFriendshipToDb } from './add-friendship-to-db';
import { approveFriendship } from './approve-friendship';
import * as bodyParser from 'body-parser';

export const router = express.Router();

router.get('/', attachFriends, getFriends);
router.post(
  '/request-friendship',
  bodyParser.json(),
  addFriendshipToDb,
  attachFriends,
  getFriends
);
router.post(
  '/approve-friendship',
  bodyParser.json(),
  approveFriendship,
  attachFriends,
  getFriends
);
