import express from "express";
import dataInput from "../../helpers/inputs";
import errorHandler from "../../helpers/errorHandler";

const convert = express.Router();

convert.get(
  "/",
  dataInput,
  errorHandler,
  (req: express.Request, res: express.Response): void => {
    res.send("Successful");
  }
);

export default convert;
