import { Router } from 'express';

import { getProducts } from '../controllers/product.controller';

const productRouter: Router = Router();

productRouter.route('/').post(getProducts);

export default productRouter;