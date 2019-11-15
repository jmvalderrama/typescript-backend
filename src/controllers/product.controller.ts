import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  const products: IProduct[] = await Product.find({});
  console.log("TCL: getProducts -> products", products);
  res.status(200).json({
    code: 'ok',
    message: 'Productos consultados satisfactoriamente.',
    data: products
  });
}