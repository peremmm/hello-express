import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import models from './models';
import routes from './routes';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) => {
  req.context = {
    models
  };
  next();
});

app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/quotes', routes.quote);

app.use((req, res, next) => {
  req.serverMessage = 'server generated message';
  next();
});

app.listen(3000, () => {
  console.log(process.env.ENVIRONMENT);
  console.log('Example app listening on port 3000!');
});