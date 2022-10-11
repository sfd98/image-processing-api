import express from "express";

export default function errorHandler(
  err: express.ErrorRequestHandler,
  req: express.Request,
  res: express.Response
) {
  if (err) {
    res
      .status(400)
      .send(err + " If necessary return to /api to check the syntax again.");
  }
}
