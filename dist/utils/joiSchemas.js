"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readerJoiSchema = exports.bookJoiSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.bookJoiSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    genre: joi_1.default.string().required(),
    year: joi_1.default.number().min(1900).max(new Date().getFullYear()).required(),
    quantity: joi_1.default.number().positive().max(100)
});
exports.readerJoiSchema = joi_1.default.object({
    readerName: joi_1.default.string().required(),
    readerId: joi_1.default.number().positive().min(100000000).max(999999999).required(),
});
