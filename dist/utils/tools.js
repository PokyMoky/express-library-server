"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBookDtoToBook = void 0;
const book_1 = require("../model/book");
const HttpError_1 = require("../errorHandler/HttpError");
const uuid_1 = require("uuid");
function getGenre(genre) {
    const gen = Object.values(book_1.BookGenres).find(v => v === genre);
    if (!gen) {
        throw new HttpError_1.HttpError(404, "Wrong genre");
    }
    return gen;
}
const convertBookDtoToBook = (dto) => {
    return {
        author: dto.author,
        genre: getGenre(dto.genre),
        // id: Math.trunc(Math.random() * 1000 + 1).toString(),
        _id: (0, uuid_1.v4)(),
        pickList: [],
        status: book_1.BookStatus.IN_STOCK,
        title: dto.title,
        year: dto.year,
    };
};
exports.convertBookDtoToBook = convertBookDtoToBook;
