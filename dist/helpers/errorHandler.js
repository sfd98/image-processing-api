"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    if (err) {
        res.status(400).send(err + " Check the syntax again.");
    }
}
exports.default = errorHandler;
