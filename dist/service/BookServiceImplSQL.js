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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookServiceSQL = void 0;
const appConfig_1 = require("../appConfig");
const HttpError_1 = require("../errorHandler/HttpError");
class BookServiceImplSQL {
    addBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield appConfig_1.pool.query('INSERT INTO books VALUES(?,?,?,?,?,?)', [book._id, book.title, book.author, book.genre, book.status, book.year]);
            if (!result) {
                throw new HttpError_1.HttpError(400, "Cannot add book");
            }
            return Promise.resolve(undefined);
        });
    }
    getAllBooks() {
        return Promise.resolve([]);
    }
    getBookByAuthor(author) {
        return Promise.resolve([]);
    }
    pickBook(id, reader, readerId) {
        return Promise.resolve(undefined);
    }
    removeBook(id) {
        throw Promise.resolve(undefined);
    }
    returnBook(id) {
        return Promise.resolve(undefined);
    }
}
exports.bookServiceSQL = new BookServiceImplSQL();
