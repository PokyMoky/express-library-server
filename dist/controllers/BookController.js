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
exports.bookController = exports.BookController = void 0;
const tools_1 = require("../utils/tools");
const BookServiceImplSQL_1 = require("../service/BookServiceImplSQL");
class BookController {
    constructor() {
        // private service: BookService = bookServiceEmbedded;
        // private service: BookService = bookServiceMongo;
        this.service = BookServiceImplSQL_1.bookServiceSQL;
        this.addBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const dto = req.body;
            const book = (0, tools_1.convertBookDtoToBook)(dto);
            const result = yield this.service.addBook(book);
            res.status(201).json(result);
        });
        this.getAllBooks = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.getAllBooks();
            res.status(200).json(result);
        });
    }
}
exports.BookController = BookController;
exports.bookController = new BookController();
