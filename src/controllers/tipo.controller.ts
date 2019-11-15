import { NowRequest, NowResponse } from '@now/node';
import Tipo, { IProductType } from '../models/ProductType';

export const getTipos = async(req: NowRequest, res: NowResponse) => {
  const tipos: IProductType[] = await Tipo.find({});
  console.log("TCL: getTipos -> tipos", tipos);
  res.status(200).json({
    code: 'ok',
    message: 'Tipos consultados satisfactoriamente.',
    data: tipos
  })
}