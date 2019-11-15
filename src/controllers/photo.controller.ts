import { NowRequest, NowResponse } from '@now/node';
import Photo ,{IPhoto} from '../models/Photo';
import { Request } from 'express';

export const saveImage = (req: Request, res: NowResponse) => {
  console.log(req.file);
  res.status(200).json({ message: 'Imagen recibida' });
}