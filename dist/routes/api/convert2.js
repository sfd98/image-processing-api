"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("../../helpers/resize"));
const convert = express_1.default.Router();
convert.get("/", (req, res) => {
    //Variable decleration.
    //Those three variables are taken from the URL using the properties in the req.query object
    const filename = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    //Image processing
    const message = (0, resize_1.default)(filename, width, height);
    res.send(message);
});
exports.default = convert;
