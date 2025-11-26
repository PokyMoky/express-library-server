import {Reader, ReaderDto, UpdateReaderDto} from "../model/reader";
import {NextFunction, Request, Response} from "express";
import {convertDtoToReader} from "../utils/tools";
import {accountServiceMongo} from "../service/AccountServiceImplMongo";
import {HttpError} from "../errorHandler/HttpError";

class AccountController {
  private service = accountServiceMongo

  createReader = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as ReaderDto;
    const reader: Reader = convertDtoToReader(body);
    await this.service.createAccount(reader);
    res.status(201).json(reader);
  }

  getAccountById = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.query.id!;
    // const reader = this.service.getAccount(id);
    // res.status(200).json(reader);
    res.status(200).json({id});
  }

  removeAccount = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.query.id!;
    res.status(200).json({id});
  }

  changePassword = async (req: Request, res: Response, next: NextFunction) => {
    const {readerId, password} = req.body;
    res.status(200).json({readerId, password});
  }

  editAccount = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.query.id!;
    const updReader = req.body as UpdateReaderDto;
    res.status(200).json(updReader);
  }
}

export const accountController = new AccountController();