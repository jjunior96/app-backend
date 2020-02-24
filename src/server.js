import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

mongoose.connect(
  'mongodb+srv://applist:applist@cluster0-0laro.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(routes);

app.listen(3333);
