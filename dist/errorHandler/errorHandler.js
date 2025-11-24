"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const HttpError_1 = require("./HttpError");
exports.errorHandler = ((err, req, res, next) => {
    if (err instanceof HttpError_1.HttpError) {
        res.status(err.status).send(err.message);
    }
    else if (err instanceof Error) {
        res.status(400).send("Unknown error " + err.message);
    }
    else {
        res.status(500).send("Unknwon server error");
    }
});
