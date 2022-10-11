import express from "express";
import fs from "fs";
import resize from "./resize";
import path from "path";

export default function dataInput(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const filename = String(req.query.filename);
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  //Variable validation
  try {
    if (!filename || !width || !height || width < 0 || height < 0) {
      //check if any parameter was not set or numerical values are 0 or smaller than 0
      throw "Wrong Parameters.";
    } else if (fs.existsSync("images/" + filename + ".jpg") == false) {
      //Check if the requested image exists
      throw "File not found";
    }
  } catch (err) {
    //Return error to the error handler
    return next(err);
  }

  const resultPath: string = path.join(
    __dirname +
      "../../../thumb/thumb_" +
      filename +
      "_" +
      width +
      "_" +
      height +
      ".jpg"
  );
  if (fs.existsSync(resultPath) == true) {
    //Check if path already exists (Caching)
    res.status(200).sendFile(resultPath);
  } else {
    //Image processing with sharp
    console.log(resultPath);
    resize(filename, width, height);
    res.status(200).sendFile(resultPath);
  }

  next();
}
