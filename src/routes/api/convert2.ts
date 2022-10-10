import express from "express";
import sharp from "sharp";
import fs from "fs";
import resize from "../../helpers/resize";

const convert = express.Router();

convert.get("/", (req: express.Request, res: express.Response): void => {
  //Variable decleration.
  //Those three variables are taken from the URL using the properties in the req.query object
  const filename = String(req.query.filename);
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  //Image processing

  const message: string = resize(filename, width, height);

  res.send(message);
});

export default convert;
