import express from "express";

export default function errorHandler(
  err: express.ErrorRequestHandler,
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: express.NextFunction
) {
  if (err) {
    res.status(400).send(err + " If necessary return to the homepage to check the syntax again.");
  }
}
