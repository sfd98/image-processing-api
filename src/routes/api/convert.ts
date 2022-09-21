import express from "express";
import {promises as fsPromises} from "fs";
import sharp from "sharp";

const convert = express.Router();

convert.get("/", (req, res) => {
  res.send("Convert API");
  const imageDirectory :string = "images/" + String(req.query.filename) + ".jpg";
  console.log(imageDirectory);

  sharp(imageDirectory)
    .resize(Number(req.query.width), Number(req.query.height))
    .toFile("thumb/thumb_" + String(req.query.filename) + "_" + Number(req.query.width) + "_" + Number(req.query.height) + ".jpg");

});

export default convert;
