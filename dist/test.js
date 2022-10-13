"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
//Image resizing
function resize(filename, width, height) {
    //Image processing with sharp
    try {
        if (!filename || !width || !height) {
            //check if any parameter was not set or numerical values are 0
            throw "Parameters in the query uncomplete or set to 0!";
        }
        else if (fs.existsSync("images/" + filename + ".jpg") == false) {
            //using Syncronous code, checking if the requested image exists
            throw "File not found. Check the spelling of the filename or use another one!";
        }
        else if (width < 0 || height < 0) {
            //check if any numerical value is smaller than 0
            throw "Width and height should be > 0.";
        }
        else {
            console.log("ENTER SHARP");
            (0, sharp_1.default)("images/" + filename + ".jpg") //Access the image directory of the image that is to be processed
                .resize(width, height) //input of the numerical parameters to perform the resize
                .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg"); //create a new file in the folder thumb with the name including the set parameters
        }
    }
    catch (err) {
        console.log("ERROR CAUGHT!!!!!!!!!!!!!!!!");
    }
}
