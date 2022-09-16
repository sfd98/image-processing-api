import express from "express";
import convert from "./api/convert";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("main api route");
});

routes.use("/convert", convert);

export default routes;
