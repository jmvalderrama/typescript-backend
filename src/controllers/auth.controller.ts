import { Request, Response } from "express";
import User, { IUser } from '../models/User';

import jwt from 'jsonwebtoken';

export const signUp = async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email, contact, city, password } = req.body;
  const user: IUser = new User({
    name,
    email,
    contact,
    city,
    password,
    role: 'ROLE_USER'
  });
  const duplicated: IUser[] = await User.find({ email: user.email })
  if (duplicated.length === 0) {
    user.password = await user.encryptPassword(password);
    const savedUser = await user.save();
    const token: string = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET_KEY || 'jwtsecrettoken');
    res.header('Auth-Token', token).json(savedUser);
  } else {
    res.send({ code: 102, message: 'El usuario ingresado ya se encuentra registrado'});
  }
};

export const signIn = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: 'Correo incorrecto'});

  const correctPassword: boolean = await user.validatePassword(req.body.password);
  if (!correctPassword) return res.status(400).json({ message: 'Contraseña incorrecta' });

  const token: string = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY || 'jwtsecrettoken');
  res.header('Auth-Token', token).json(user);
};

export const getProfile = async (req: Request, res: Response) => {
  // const user = await User.findById(req.userId, { password: 0 });
  // if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  // res.json(user)
};

// 4025158 - 018000936666