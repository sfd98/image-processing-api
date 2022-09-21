import express from "express";
import sharp from "sharp";
import fs from "fs";

const convert = express.Router();

convert.get("/", (req, res) =>{ 

  const filenameParam = req.query.filename;
  const widthParam = req.query.width;
  const heightParam = req.query.height;
  const filename :string = String(filenameParam);
  const width :number = Number(widthParam);
  const height :number = Number(heightParam);
    
  const imageDirectory :string = "images/" + String(filenameParam) + ".jpg";
    
  //Error handling. Check in this order: Query String, file exists, filename parameter set, width or height parameter set
  try {
    if (!/\?.+/.test(req.url))
      throw "No query string!"
    if (fs.existsSync(imageDirectory) == false) 
      throw "File not found. Check the spelling of the filename or use another one!";
    if (!filenameParam)
      throw "No filename!"
    if (!widthParam || !heightParam)
      throw "No width or height!";
    } catch (err) {
      console.log(err)
      res.send(err + " Return to /api to check the syntax again.")
  };

  //Image processing
  sharp(imageDirectory)
    .resize(width, height)
    .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg")
    .catch(err => console.log(err));
  res.send("Successful, please check the thumb folder.")
});


export default convert;
