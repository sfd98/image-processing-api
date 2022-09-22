"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const convert = express_1.default.Router();
convert.get("/", (req, res) => {
    //Variable decleration. First three initial Params directly taken from url, last three converted params into usable variables in methods.
    const filenameParam = req.query.filename;
    const widthParam = req.query.width;
    const heightParam = req.query.height;
    const filename = String(filenameParam);
    const width = Number(widthParam);
    const height = Number(heightParam);
    const imageDirectory = "images/" + String(filenameParam) + ".jpg";
    //Error handling. Check in this order: Query String, file exists, filename parameter set, width or height parameter set
    /*try {
      if (!/\?.+/.test(req.url))
        throw "No query string!"
      if (fs.existsSync(imageDirectory) == false)
        throw "File not found. Check the spelling of the filename or use another one!";
      if (!filenameParam)
        throw "No filename!"
      if (!widthParam || !heightParam)
        throw "No width or height!";
      } catch (err) {
        console.log(err)
        res.send(err + " Return to /api to check the syntax again.")
    };*/
    //Image processing
    try {
        if (!/\?.+/.test(req.url))
            throw "No query string!";
        if (fs_1.default.existsSync(imageDirectory) == false)
            throw "File not found. Check the spelling of the filename or use another one!";
        if (!filenameParam)
            throw "No filename!";
        if (!widthParam || !heightParam)
            throw "No width or height!";
        (0, sharp_1.default)(imageDirectory)
            .resize(width, height)
            .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg")
            .catch(err => console.log(err));
        res.send("Successful, please check the thumb folder.");
        res.status(200);
    }
    catch (err) {
        console.log(err);
        res.send(err + " Return to /api to check the syntax again.");
    }
});
exports.default = convert;
