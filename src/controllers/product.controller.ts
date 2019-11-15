import { NowRequest, NowResponse } from '@now/node';
import Product, { IProduct } from '../models/Product';

export const getProducts = async (req: NowRequest, res: NowResponse) => {
  const products: IProduct[] = await Product.find({});
  console.log("TCL: getProducts -> products", products);
  res.status(200).json({
    code: 'ok',
    message: 'Productos consultados satisfactoriamente.',
    data: products
  });
}