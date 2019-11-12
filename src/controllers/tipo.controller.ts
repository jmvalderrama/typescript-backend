import { Request, Response } from 'express';
import Tipo, { IProductType } from '../models/ProductType';

export const getTipos = async(req: Request, res: Response) => {
  const tipos: IProductType[] = await Tipo.find({});
  console.log("TCL: getTipos -> tipos", tipos);
  res.status(200).send({
    code: 'ok',
    message: 'Tipos consultados satisfactoriamente.',
    data: tipos
  })
}