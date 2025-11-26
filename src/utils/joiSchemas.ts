import Joi from 'joi';
import {BookDto} from "../model/book";

export const bookJoiSchema = Joi.object<BookDto>({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  year: Joi.number().min(1900).max(new Date().getFullYear()).required(),
  quantity: Joi.number().positive().max(100)
});

export const baseReaderJoiSchema = Joi.object({
  username: Joi.string()
    .trim()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .trim()
    .email({minDomainSegments: 2})
    .required(),
  birthDate: Joi.date().iso().required(),
});

export const updatePasswordSchema = Joi.object({
  readerId: Joi.number().positive().min(100_000_000).max(999_999_999).required(),
  password: Joi.string()
    .trim()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,12}$')).required(),
});

export const updateReaderJoiSchema = baseReaderJoiSchema.fork(
  ['username', 'email', 'birthDate'],
  field => field.optional()
);

export const createReaderJoiSchema = baseReaderJoiSchema
  .concat(updatePasswordSchema);