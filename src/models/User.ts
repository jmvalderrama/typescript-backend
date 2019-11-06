import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document{
  name: string;
  email: string;
  contact: string;
  city: string;
  address?: string;
  password: string;
  role: string;
  image?: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    trim: true
  },
  contact: String,
  city: String,
  address: String,
  password: String,
  role: String,
  image: String
});

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
}

export default model<IUser>('User', userSchema);