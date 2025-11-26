import * as mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";
import {BookGenres, BookStatus} from "../model/book";

const pickListSchema = new mongoose.Schema({
  readerId: {type: Number, min: 100_000_000, max: 999_999_999, required: true},
  readerName: {type: String, required: true},
  pickDate: {type: String, required: true},
  returnDate: {type: String, default: null},
});

const bookMongooseSchema = new mongoose.Schema({
  _id: {type: String, default: () => uuidv4(), unique: true},
  title: {type: String, required: true},
  author: {type: String, required: true},
  year: {type: Number, min: 1900, max: 2050, required: true},
  genre: {type: String, enum: Object.values(BookGenres), required: true},
  status: {type: String, enum: Object.values(BookStatus), required: true},
  pickList: {type: [pickListSchema], default: []}
});

const readerMongooseSchema = new mongoose.Schema({
  _id: {type: Number, min: 100_000_000, max: 999_999_999, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  passHash: {type: String, required: true},
  birthDate: {type: String, required: true},
});

export const picklistMongooseModel = mongoose.model("PickList", pickListSchema);
export const bookMongooseModel = mongoose.model("Book", bookMongooseSchema, 'book-collection');
export const readerMongooseModel = mongoose.model("Reader", readerMongooseSchema);