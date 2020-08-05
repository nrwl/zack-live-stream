import * as express from 'express';
import {
  router as authRouter,
  authorize,
} from '@zack-live-stream/backend/auth';

const app = express();
const port = 3334;
const router = express.Router();

const todos = [
  { task: 'do something', completed: true },
  { task: 'do something else', completed: false },
];

router.get('', (req, res) => res.status(200).send());
router.get('/todos', authorize, (req, res) => res.send(todos));
router.use('/auth', authRouter);

app.use('/api', router);

app.listen(port, () => console.log(`Todos API is listening on port ${port}.`));
