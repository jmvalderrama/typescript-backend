import { Router } from 'express';
import authRouter from './auth';
import photoRouter from './photo.route';
import productRouter from './product.route';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/photo', photoRouter);
router.use('/product', productRouter);

export default router;