import express from "express";
import convert from "./api/convert";

const routes = express.Router();

//Route for the endpoint /api. Instructions to use the convert API.

routes.get("/", (_req: express.Request, res: express.Response): void => {
  res.send(
    "Convert API. Use the following syntax without * in the URL: /convert?filename=*filename*&width=*number*&height=*number*"
  );
});

routes.use("/convert", convert);

export default routes;
