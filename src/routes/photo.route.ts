import { Router } from 'express';
import multer from '../libs/multer';

import { saveImage } from '../controllers/photo.controller';

const photoRouter: Router = Router();

photoRouter.route('/').post(multer.single('user-avatar') ,saveImage);

export default photoRouter;