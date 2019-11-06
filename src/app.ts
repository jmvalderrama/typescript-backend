import path from 'path';

import express, { Application } from 'express';
import morgan from 'morgan';

import indexRoutes from './routes/index';

const app: Application = express();

app.set('port', 3500 || process.env.PORT);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;