import Joi from "joi";
import {Request, Response, NextFunction} from "express";
import {HttpError} from "../errorHandler/HttpError";

export const bodyValidator = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const {error} = schema.validate(req.body);
    if (error) {
      throw new HttpError(400, error.message);
    }
    next();
  }
};

export const readerIdValidator = (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.query;

  if (!id) {
    throw new HttpError(400, "ID required");
  }

  const parsedId = Number(id);
  if (isNaN(parsedId) || parsedId < 100_000_000 || parsedId > 999_999_999) {
    throw new HttpError(400, "Invalid ID number");
  }

  next();
};