import express from "express";
import {bookController} from "../controllers/BookController";
import {bodyValidator} from "../middleware/bodyValidator";
import {bookJoiSchema} from "../utils/joiSchemas";

const bookRouter = express.Router();

bookRouter.get('/', bookController.getAllBooks);
bookRouter.post('/', bodyValidator(bookJoiSchema), bookController.addBook);

export default bookRouter;