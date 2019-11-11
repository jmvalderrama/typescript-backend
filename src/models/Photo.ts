import { Schema, model, Document } from 'mongoose';

 export interface IPhoto extends Document {
  title: string;
  decription: string;
  imagePath: string;
  category: string;
}

const photoSchema = new Schema({
  title: String,
  decription: String,
  imagePath: String,
  category: String
});


export default model<IPhoto>('Photo', photoSchema);