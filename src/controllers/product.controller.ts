import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  const products: IProduct[] = await Product.find({});
  res.status(200).send(products);
}