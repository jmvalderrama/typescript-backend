import { Router } from 'express';
import { getTipos } from '../controllers/tipo.controller';

const typeRouter: Router = Router();

typeRouter.route('/').get(getTipos);

export default typeRouter;