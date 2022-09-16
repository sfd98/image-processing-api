import express from "express";
import secondary from "./api/secondary";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("main api route");
});

routes.use("/secondary", secondary);

export default routes;
