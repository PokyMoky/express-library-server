import {Book, BookDto, BookGenres, BookStatus} from "../model/book";
import {HttpError} from "../errorHandler/HttpError";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import {Reader, ReaderDto} from "../model/reader";

function getGenre(genre: string) {
  const gen = Object.values(BookGenres).find(v => v === genre);
  if (!gen) {
    throw new HttpError(404, "Wrong genre");
  }
  return gen;
}

export const convertBookDtoToBook = (dto: BookDto): Book => {
  return {
    author: dto.author,
    genre: getGenre(dto.genre),
    // id: Math.trunc(Math.random() * 1000 + 1).toString(),
    _id: uuidv4(),
    pickList: [],
    status: BookStatus.IN_STOCK,
    title: dto.title,
    year: dto.year,
  }
}

export const convertDtoToReader = (dto: ReaderDto) => {
  const salt = bcrypt.genSaltSync(10);

  const reader: Reader = {
    _id: dto.id,
    username: dto.username,
    email: dto.email,
    birthDate: dto.birthDate,
    passHash: bcrypt.hashSync(dto.password, salt),
  }
  return reader;
}