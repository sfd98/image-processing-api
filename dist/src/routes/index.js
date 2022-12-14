"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const convert_1 = __importDefault(require("./api/convert"));
const routes = express_1.default.Router();
//Route for the endpoint /api. Instructions to use the convert API.
routes.get("/", (_req, res) => {
    res.send("Convert API. Use the following syntax without * in the URL: /convert?filename=*filename*&width=*number*&height=*number*");
});
routes.use("/convert", convert_1.default);
exports.default = routes;
