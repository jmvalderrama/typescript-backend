import { Router } from 'express';
import authRouter from './auth';
import photoRouter from './photo.route';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/photo', photoRouter);

export default router;