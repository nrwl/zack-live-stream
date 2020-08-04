import * as express from 'express';
import * as bodyParser from 'body-parser';
import { login } from './login';

export const router = express.Router();

router.use(bodyParser.json());

router.post('/login', login);
