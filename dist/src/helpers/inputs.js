"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const resize_1 = __importDefault(require("./resize"));
function dataInput(req, res, next) {
    const filename = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    //Variable validation
    try {
        if (!filename || !width || !height || width < 0 || height < 0) {
            //check if any parameter was not set or numerical values are 0 or smaller than 0
            throw "Wrong Parameters.";
        }
        else if (fs_1.default.existsSync("images/" + filename + ".jpg") == false) {
            //Check if the requested image exists
            throw "File not found";
        }
    }
    catch (err) {
        //Return error to the error handler
        return next(err);
    }
    //Image processing with sharp
    (0, resize_1.default)(filename, width, height);
    res.send("Successful, please check the thumb folder.");
    res.status(200);
    next();
}
exports.default = dataInput;
