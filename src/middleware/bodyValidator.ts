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
}