import express from "express";

const convert = express.Router();

convert.get("/", (req, res) => {
  res.send("Convert API");
});

export default convert;
