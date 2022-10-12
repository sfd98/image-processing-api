"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inputs_1 = __importDefault(require("../helpers/inputs"));
const errorHandler_1 = __importDefault(require("../helpers/errorHandler"));
const routes = express_1.default.Router();
//Route for the endpoint /api.
routes.use(inputs_1.default);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
routes.get("/", () => {
    console.log("Resize API");
});
routes.use(errorHandler_1.default);
exports.default = routes;
