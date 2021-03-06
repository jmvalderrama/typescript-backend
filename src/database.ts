import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function startConnection() {
  await connect(process.env.MONGODB_URI || 'mongodb://localhost/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  console.log('Database is connected');
}
