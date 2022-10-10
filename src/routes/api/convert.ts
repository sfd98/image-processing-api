import express from "express";
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
  try {
    //Error handling. If error send error code 400.

    if (!filename || !width || !height) {
      //check if any parameter was not set or numerical values are 0
      res.status(400);
      throw "Parameters in the query uncomplete or set to 0!";
    } else if (fs.existsSync("images/" + filename + ".jpg") == false) {
      //using Syncronous code, checking if the requested image exists
      res.status(400);
      throw "File not found. Check the spelling of the filename or use another one!";
    } else if (width < 0 || height < 0) {
      //check if any numerical value is smaller than 0
      res.status(400);
      throw "Width and height should be > 0.";
    } else {
      //Image processing with sharp
      resize(filename, width, height);

      //Send successful message and status 200 if operation complete
      res.send("Successful, please check the thumb folder.");
      res.status(200);
    }
  } catch (err) {
    //Send error message and status 500 if operation faulty
    res.send(err + " If necessary return to /api to check the syntax again.");
    res.status(500);
  }
});

export default convert;
