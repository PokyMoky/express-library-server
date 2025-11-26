import express from 'express';

// import {PORT} from "./appConfig";
import {errorHandler} from "./errorHandler/errorHandler";
import bookRouter from "./routers/bookRouter";
import morgan from "morgan";
import * as fs from "node:fs";
import accountRouter from "./routers/accountRouter";


export const launchServer = () => {
  const app = express();

  app.listen(process.env.PORT, () => {
    console.log(`Server runs on port: ${process.env.PORT}`);
  });
  const logStream = fs.createWriteStream('app.log', {flags: 'a'});

  app.use(express.json());

  app.use(morgan('dev'));
  app.use(morgan('combined', {stream: logStream}));

  app.use('/api/books', bookRouter);
  app.use('/api/account', accountRouter);

  app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
  });

  app.use(errorHandler);
};