import {BookService} from "./BookService";
import {Book} from "../model/book";
import {HttpError} from "../errorHandler/HttpError";
import {pool} from "../app";
import {RowDataPacket} from "mysql2";


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

  async pickBook(id: string, reader: string, readerId: number): Promise<void> {
    let query = "SELECT * FROM books WHERE id = ?";
    const [books] = await pool.query<RowDataPacket[]>(query, [id]);

    if(books.length === 0) {
      throw new HttpError(404, `Book with id ${id} not found`);
    }

    query = "SELECT * FROM readers WHERE id = ?";
    const [readers] = await pool.query<RowDataPacket[]>(query, [readerId]);

    if(readers.length === 0) {
      query = "INSERT INTO readers VALUES (?, ?)";
      const [newReader] = await pool.query(query, [readerId, reader]);
    }

    const now = new Date().toDateString();

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