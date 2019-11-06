import { Request, Response, NextFunction } from "express";

import jwt from 'jsonwebtoken';

interface IPayloadJWT {
  _id: string;
  iat: number;
  exp: number;
}

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Auth-Token');
  if (!token) return res.status(401).json({ message: 'Acceso denegado' });
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY || 'jwtsecrettoken' ) as IPayloadJWT;
  // req.userId = payload._id;
  next();
}