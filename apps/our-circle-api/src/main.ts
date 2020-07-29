import * as express from 'express';
import { router as contentPostRouter } from '@zack-live-stream/backend/content-posts';

const app = express();
const port = 3333;
const router = express.Router();

router.get('', (req, res) => res.status(200).send());
router.use('/content-posts', contentPostRouter);

app.use('/api', router);

app.listen(port, () =>
  console.log(`Our circle API is listening on port ${port}.`)
);
