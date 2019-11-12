import { Router } from 'express';

import { getProducts } from '../controllers/product.controller';

const productRouter: Router = Router();

productRouter.route('/').get(getProducts);

export default productRouter;