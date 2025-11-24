"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStatus = exports.BookGenres = void 0;
var BookGenres;
(function (BookGenres) {
    BookGenres["CLASSIC"] = "classic";
    BookGenres["DETECTIVE"] = "detective";
    BookGenres["ROMANTIC"] = "romantic";
    BookGenres["DYSTOPIA"] = "dystopia";
    BookGenres["FANTASY"] = "fantasy";
    BookGenres["KIDS"] = "kids";
})(BookGenres || (exports.BookGenres = BookGenres = {}));
var BookStatus;
(function (BookStatus) {
    BookStatus["IN_STOCK"] = "in_stock";
    BookStatus["ON_HAND"] = "on_hand";
    BookStatus["REMOVED"] = "removed";
})(BookStatus || (exports.BookStatus = BookStatus = {}));
