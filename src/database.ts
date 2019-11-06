import { connect } from 'mongoose';

export async function startConnection() {
  await connect('mongodb://localhost/photo-gallery-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  console.log('Database is connected');
}
