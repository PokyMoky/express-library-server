"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookServiceEmbedded = void 0;
const HttpError_1 = require("../errorHandler/HttpError");
class BookServiceImplEmbedded {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        if (this.books.find(item => item._id === book._id)) {
            throw new HttpError_1.HttpError(409, `Book with id: ${book._id} already exists`);
        }
        this.books.push(book);
        return Promise.resolve();
    }
    getAllBooks() {
        return Promise.resolve([...this.books]);
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
exports.bookServiceEmbedded = new BookServiceImplEmbedded();
