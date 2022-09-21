import express from "express";
import convert from "./api/convert";
import sharp from "sharp";

const routes = express.Router();

routes.get("/", (req, res) => {
});

routes.use("/convert", convert);

export default routes;
