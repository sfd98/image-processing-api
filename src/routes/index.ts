import express from "express";
import convert from "./api/convert";
import sharp from "sharp";

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Convert API. Use the following syntax in the URL: /convert?filename=*filename*&width=*number*&height=*number*");
});

routes.use("/convert", convert);

export default routes;
