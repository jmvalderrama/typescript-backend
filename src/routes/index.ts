import { Router } from 'express';
import authRouter from './auth';
import photoRouter from './photo.route';
import productRouter from './product.route';
import typeRouter from './tipo.route';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/photo', photoRouter);
router.use('/product', productRouter);
router.use('/tipos', typeRouter)

export default router;