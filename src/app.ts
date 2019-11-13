import path from 'path';

import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/index';

const app: Application = express();

app.set('port', 3500 || process.env.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

app.get('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ 'message': 'Cherie API '});
})

export default app;