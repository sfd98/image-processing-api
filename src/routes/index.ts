import express from "express";
import dataInput from "../helpers/inputs";
import errorHandler from "../helpers/errorHandler";

const routes = express.Router();

//Route for the endpoint /api.

routes.use(dataInput);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
routes.get("/", () => {
  console.log("Resize API");
});

routes.use(errorHandler);

export default routes;
