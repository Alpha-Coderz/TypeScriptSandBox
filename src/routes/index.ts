import * as express from 'express';
const router = express.Router();

router.use('/api', require('./api'));

export = router;