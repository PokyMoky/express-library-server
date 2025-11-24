import {BookService} from "../service/BookService";
import {bookServiceEmbedded} from "../service/BookServiceImplEmbedded";
import {Request, Response, NextFunction} from "express";
import {Book, BookDto} from "../model/book";
import {convertBookDtoToBook} from "../utils/tools";
import {bookServiceMongo} from "../service/BookServiceImplMongo";
import {bookServiceSQL} from "../service/BookServiceImplSQL";

class BookController {
  // private service: BookService = bookServiceEmbedded;
  // private service: BookService = bookServiceMongo;
  private service: BookService = bookServiceSQL;

  addBook = async (req: Request, res: Response, next: NextFunction) => {
    const dto = req.body as BookDto;
    const book:Book = convertBookDtoToBook(dto);
    const result = await this.service.addBook(book);
    res.status(201).json(result);
  }

  getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    const result = await this.service.getAllBooks();
    res.status(200).json(result);
  }

  removeBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.query.bookId;
    const result = await this.service.removeBook(bookId as string);
  }

  pickBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.query.bookId;
    await this.service.returnBook(bookId as string);
    res.send("Book returned");
  }

  getBookByAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const author = req.query.author;
    const result = await this.service.getBookByAuthor(author as string);
    res.json(result);
  }
}

export const bookController = new BookController();