import * as express from 'express';
import { router as contentPostRouter } from '@zack-live-stream/backend/content-posts';
import {
  router as authRouter,
  authorize,
} from '@zack-live-stream/backend/auth';
import { router as friendRouter } from '@zack-live-stream/backend/friends';

const app = express();
const port = 3333;
const router = express.Router();

router.get('', (req, res) => res.status(200).send()); // TODO: remove
router.use('/content-posts', authorize, contentPostRouter);
router.use('/auth', authRouter);
router.use('/friends', authorize, friendRouter);

app.use('/api', router);

app.listen(port, () =>
  console.log(`Hi Twitch!!!! Our circle API is listening on port ${port}.`)
);
