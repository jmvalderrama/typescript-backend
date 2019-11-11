import { Router } from 'express';
import { signIn, signUp, getProfile } from '../controllers/auth.controller';
import { VerifyToken } from '../middlewares/verifyToken';

const authRouter: Router = Router();

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);
authRouter.get('/profile/:id', getProfile);

export default authRouter;