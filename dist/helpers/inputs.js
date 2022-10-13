"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const resize_1 = __importDefault(require("./resize"));
const path_1 = __importDefault(require("path"));
function dataInput(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
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
        //Caching and Resizing
        const checkPath = path_1.default.join(__dirname, "..", "..", "images", "thumb_" + filename + "_" + height + "_" + width + ".jpg");
        try {
            if (fs_1.default.existsSync(checkPath) == true) {
                //Check if path already exists (Caching)
                res.status(200).sendFile(checkPath);
            }
            else {
                //Image processing with sharp
                const newImage = yield (0, resize_1.default)(filename, width, height);
                res.status(200).sendFile(path_1.default.join(__dirname, "..", "..", newImage));
            }
        }
        catch (err) {
            res.send(err);
        }
        next();
    });
}
exports.default = dataInput;
