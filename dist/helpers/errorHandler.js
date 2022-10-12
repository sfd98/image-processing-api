"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
    if (err) {
        res
            .status(400)
            .send(err + " If necessary return to /api to check the syntax again.");
    }
}
exports.default = errorHandler;
