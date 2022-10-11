"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
function resize(filename, width, height) {
    (0, sharp_1.default)("images/" + filename + ".jpg") //Access the image directory of the image that is to be processed
        .resize(width, height) //input of the numerical parameters to perform the resize
        .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg"); //create a new file in the folder thumb with the name and the set parameters
}
exports.default = resize;
