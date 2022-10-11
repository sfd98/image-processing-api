"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
//Image resizing
function resize(filename, width, height) {
    const imageDirectory = "images/" + filename + ".jpg";
    //Image processing with sharp
    (0, sharp_1.default)(imageDirectory) //Access the image directory of the image that is to be processed
        .resize(width, height) //input of the numerical parameters to perform the resize
        .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg") //create a new file in the folder thumb with the name including the set parameters
        .catch((err) => console.log(err)); //catch any error and display it to the console
}
exports.default = resize;
