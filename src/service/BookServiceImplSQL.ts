import {BookService} from "./BookService";
import {Book} from "../model/book";
import {HttpError} from "../errorHandler/HttpError";
import {pool} from "../app";


class BookServiceImplSQL implements BookService {

  async addBook(book: Book): Promise<void> {
    const result = await pool.query('INSERT INTO books VALUES(?,?,?,?,?,?)',
      [book._id, book.title, book.author, book.genre, book.status, book.year]);
    if (!result) {
      throw new HttpError(400, "Cannot add book");
    }
    return Promise.resolve();
  }

  getAllBooks(): Promise<Book[]> {
    return Promise.resolve([]);
  }

  getBookByAuthor(author: string): Promise<Book[]> {
    return Promise.resolve([]);
  }

  pickBook(id: string, reader: string, readerId: number): Promise<void> {
    return Promise.resolve(undefined);
  }

  removeBook(id: string): Promise<Book> {
    throw Promise.resolve(undefined);
  }

  returnBook(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }
}

export const bookServiceSQL = new BookServiceImplSQL();