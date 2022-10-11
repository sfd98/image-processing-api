"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inputs_1 = __importDefault(require("../../helpers/inputs"));
const errorHandler_1 = __importDefault(require("../../helpers/errorHandler"));
const convert = express_1.default.Router();
convert.get("/", inputs_1.default, errorHandler_1.default);
exports.default = convert;
