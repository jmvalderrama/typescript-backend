import { Request, Response } from 'express';
import Photo ,{IPhoto} from '../models/Photo';

export const saveImage = (req: Request, res: Response) => {
  console.log(req.file);
  res.status(200).json({ message: 'Imagen recibida' });
}