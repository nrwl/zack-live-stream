import * as express from 'express';
import * as bodyParser from 'body-parser';
import { login } from './login';
import { logout } from './logout';
import { authorize } from './authorize';

export const router = express.Router();

router.use(bodyParser.json());

router.post('/login', login);
router.post('/logout', authorize, logout);
