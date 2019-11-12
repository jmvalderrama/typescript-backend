import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  titulo: string;
  marca: string;
  descripcion: string;
  precio: string;
  file: string;
  tipo: any;
}

const productSchema = new Schema({
  titulo: String,
  marca: String,
  descripcion: String,
  precio: String,
  file: String,
  tipo: {
    type: Schema.Types.ObjectId, 
    ref: 'Tipo'
  }
});

export default model<IProduct>('Producto', productSchema);