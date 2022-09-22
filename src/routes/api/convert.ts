import express from "express";
import sharp from "sharp";
import fs from "fs";

const convert = express.Router();

convert.get("/", (req, res) => {
  //Variable decleration. First three initial Params directly taken from url, last three converted params into usable variables in methods.
  const filenameParam = req.query.filename;
  const widthParam = req.query.width;
  const heightParam = req.query.height;
  const filename = String(filenameParam);
  const width = Number(widthParam);
  const height = Number(heightParam);

  //Variable to access the image directory
  const imageDirectory: string = "images/" + String(filenameParam) + ".jpg";

  //Image processing
  try {
    //Error handling. Check error messages to understand the effect
    if (!/\?.+/.test(req.url)) {
      res.status(400);
      throw "No query string!";
    }

    if (fs.existsSync(imageDirectory) == false) {
      res.status(400);
      throw "File not found. Check the spelling of the filename or use another one!";
    }

    if (!filenameParam) {
      res.status(400);
      throw "No filename!";
    }

    if (!widthParam || !heightParam) {
      res.status(400);
      throw "No width or height!";
    }

    if (width < 0 || height < 0) {
      res.status(400);
      throw "Width and height should be > 0.";
    }

    //Image processing with sharp
    sharp(imageDirectory)
      .resize(width, height)
      .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg")
      .catch((err) => console.log(err));

    res.send("Successful, please check the thumb folder.");
    res.status(200);
  } catch (err) {
    console.log(err);
    res.send(err + " Return to /api to check the syntax again.");
    res.status(400);
  }
});

export default convert;
