import { Schema, model, Document } from 'mongoose';

export interface IProductType extends Document {
  categoria: string;
  descripcion: string;
}

const TipoSchema = new Schema({
  categoria: String,
  descripcion: String,
})

export default model<IProductType>('Tipo', TipoSchema);