"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const convert_1 = __importDefault(require("./api/convert"));
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
});
routes.use("/convert", convert_1.default);
exports.default = routes;
