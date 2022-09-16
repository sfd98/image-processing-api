import express from "express";

const secondary = express.Router();

secondary.get("/", (req, res) => {
  res.send("secondary api route");
});

export default secondary;
