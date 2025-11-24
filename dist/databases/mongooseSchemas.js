"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookMongooseModel = exports.picklistMongooseModel = void 0;
const mongoose = __importStar(require("mongoose"));
const uuid_1 = require("uuid");
const book_1 = require("../model/book");
const pickListSchema = new mongoose.Schema({
    readerId: { type: Number, min: 100000000, max: 999999999, required: true },
    readerName: { type: String, required: true },
    pickDate: { type: String, required: true },
    returnDate: { type: String, default: null },
});
exports.picklistMongooseModel = mongoose.model("PickList", pickListSchema);
const bookMongooseSchema = new mongoose.Schema({
    _id: { type: String, default: () => (0, uuid_1.v4)(), unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, min: 1900, max: 2050, required: true },
    genre: { type: String, enum: Object.values(book_1.BookGenres), required: true },
    status: { type: String, enum: Object.values(book_1.BookStatus), required: true },
    pickList: { type: [pickListSchema], default: [] }
});
exports.bookMongooseModel = mongoose.model("Book", bookMongooseSchema, 'book-collection');
