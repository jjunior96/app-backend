import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

import routes from './routes';

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb+srv://applist:applist@cluster0-0laro.mongodb.net/list?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);

app.use(routes);

server.listen(3333);
