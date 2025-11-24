"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
const HttpError_1 = require("../errorHandler/HttpError");
const bodyValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            throw new HttpError_1.HttpError(400, error.message);
        }
        next();
    };
};
exports.bodyValidator = bodyValidator;
