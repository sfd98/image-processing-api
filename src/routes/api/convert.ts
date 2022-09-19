import express from "express";
import {promises as fsPromises} from "fs";
//import sharp from "sharp";

const convert = express.Router();

convert.get("/", (req, res) => {
  res.send("Convert API");

  

});

export default convert;
