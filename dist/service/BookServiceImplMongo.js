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
exports.bookServiceMongo = void 0;
const book_1 = require("../model/book");
const mongooseSchemas_1 = require("../databases/mongooseSchemas");
const uuid_1 = require("uuid");
const HttpError_1 = require("../errorHandler/HttpError");
class BookServiceImplMongo {
    addBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            // const isExists = await bookMongooseModel.findById(book.id);
            // ====== var1 ======
            // const newBookDoc = await bookMongooseModel.create(book);
            // await newBookDoc.save();
            // ====== var2 =======
            const doc = yield mongooseSchemas_1.bookMongooseModel.create(Object.assign(Object.assign({}, book), { _id: (0, uuid_1.v4)() }));
        });
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield mongooseSchemas_1.bookMongooseModel.find().exec();
            return result;
        });
    }
    getBookByAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield mongooseSchemas_1.bookMongooseModel.find({ author });
            return result;
        });
    }
    pickBook(id, reader, readerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookDoc = yield mongooseSchemas_1.bookMongooseModel.findById(id).exec();
            if (!bookDoc) {
                throw new HttpError_1.HttpError(409, `Book with id ${id} does not exist`);
            }
            if (bookDoc.status !== book_1.BookStatus.IN_STOCK) {
                throw new HttpError_1.HttpError(409, "Book status is not 'in_stock");
            }
            bookDoc.status = book_1.BookStatus.ON_HAND;
            bookDoc.pickList.push({
                readerId,
                readerName: reader,
                pickDate: new Date().toDateString(),
                returnDate: null,
            });
            yield bookDoc.save();
            return Promise.resolve(undefined);
        });
    }
    removeBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookDoc = yield mongooseSchemas_1.bookMongooseModel.findById(id).exec();
            if (!bookDoc) {
                throw new HttpError_1.HttpError(409, `Book with id ${id} does not exist`);
            }
            if (bookDoc.status !== book_1.BookStatus.IN_STOCK) {
                bookDoc.status = book_1.BookStatus.REMOVED;
                bookDoc.save();
                throw new HttpError_1.HttpError(409, `Book is on hand. Marked as REMOVED`);
            }
            const removed = yield mongooseSchemas_1.bookMongooseModel.findByIdAndDelete(id).exec();
            return removed;
        });
    }
    returnBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookDoc = yield mongooseSchemas_1.bookMongooseModel.findById(id).exec();
            if (!bookDoc) {
                throw new HttpError_1.HttpError(409, `Book with id ${id} does not exist`);
            }
            if (bookDoc.status === book_1.BookStatus.IN_STOCK) {
                throw new HttpError_1.HttpError(409, `Book is in-stock`);
            }
            bookDoc.pickList[bookDoc.pickList.length - 1].returnDate = new Date().toDateString();
            if (bookDoc.status === book_1.BookStatus.REMOVED) {
                mongooseSchemas_1.bookMongooseModel.findByIdAndDelete(id);
                throw new HttpError_1.HttpError(409, "Book marked as REMOVED was deleted from DB");
            }
            bookDoc.status = book_1.BookStatus.IN_STOCK;
            yield bookDoc.save();
        });
    }
}
exports.bookServiceMongo = new BookServiceImplMongo();
