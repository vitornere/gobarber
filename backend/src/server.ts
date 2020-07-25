import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server started!');
});
