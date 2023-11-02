import express, { NextFunction } from 'express';

export const logger = (req: express.Request, res: express.Response, next: NextFunction): void => {
  const url: string = req.url;
  console.log(`${url} was visited`);
  next();
};
