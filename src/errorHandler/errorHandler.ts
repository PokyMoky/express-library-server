import {Request, Response, NextFunction} from "express";
import {HttpError} from "./HttpError";

export const errorHandler = ((err:unknown, req:Request, res:Response, next:NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).send(err.message);
  } else if (err instanceof Error) {
    res.status(400).send("Unknown error " + err.message);
  } else {
    res.status(500).send("Unknwon server error")
  }
})