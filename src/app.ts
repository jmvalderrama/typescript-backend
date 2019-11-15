import path from 'path';

import express, { Application } from 'express';
import http from 'http';
import { NowRequest, NowResponse } from '@now/node';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/index';

const app: Application = express();
const server = http.createServer(app);

app.set('port', 3500 || process.env.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

app.get('/', (req: NowRequest, res: NowResponse) => {
  console.log(req.body);
  res.status(200).json({ 'message': 'Cherie API '});
})

function startServer() {
  server.listen(app.get('port'), () => console.log(`Running on port ${app.get('port')}`))
}

setImmediate(startServer);

export default app;