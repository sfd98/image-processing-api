"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const convert = express_1.default.Router();
convert.get("/", (req, res) => {
    res.send("Convert API");
    const imageDirectory = "images/" + String(req.query.filename) + ".jpg";
    console.log(imageDirectory);
    (0, sharp_1.default)(imageDirectory)
        .resize(Number(req.query.width), Number(req.query.height))
        .toFile("thumb/thumb_" + String(req.query.filename) + "_" + Number(req.query.width) + "_" + Number(req.query.height) + ".jpg");
});
exports.default = convert;
