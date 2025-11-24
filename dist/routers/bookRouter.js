"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookController_1 = require("../controllers/BookController");
const bodyValidator_1 = require("../middleware/bodyValidator");
const joiSchemas_1 = require("../utils/joiSchemas");
const bookRouter = express_1.default.Router();
bookRouter.get('/', BookController_1.bookController.getAllBooks);
bookRouter.post('/', (0, bodyValidator_1.bodyValidator)(joiSchemas_1.bookJoiSchema), BookController_1.bookController.addBook);
exports.default = bookRouter;
