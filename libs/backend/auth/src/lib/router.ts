import * as bodyParser from 'body-parser';
import * as express from 'express';
import { authorize } from './authorize';
import { getUser } from './getUser';
import { login } from './login';
import { logout } from './logout';

export const router = express.Router();

router.use(bodyParser.json());

router.post('/login', login);
router.post('/logout', authorize, logout);
router.get('/user', authorize, getUser);
