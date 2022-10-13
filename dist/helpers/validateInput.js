"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//Error handling
function validateInput(filename, width, height) {
    const imageDirectory = "images/" + filename + ".jpg";
    let err = "";
    if (!filename || !width || !height) {
        //check if any parameter was not set or numerical values are 0
        err += "Parameters in the query uncomplete or set to 0! \n";
    }
    else if (fs_1.default.existsSync(imageDirectory) == false) {
        //using Syncronous code, checking if the requested image exists
        err +=
            "File not found. Check the spelling of the filename or use another one! \n";
    }
    else if (width < 0 || height < 0) {
        //check if any numerical value is smaller than 0
        err += "Width and height should be > 0. \n";
    }
    return err;
}
exports.default = validateInput;
