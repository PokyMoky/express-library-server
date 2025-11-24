import {ReaderService} from "../service/ReaderService";
import {Reader, ReaderDto} from "../model/reader";
import {NextFunction, Request, Response} from "express";
import {convertDtoToReader} from "../utils/tools";
import {readerServiceSQL} from "../service/ReaderServiceSQL";

class ReaderController {
  private service: ReaderService = readerServiceSQL;

  addReader = async (req: Request, res: Response, next: NextFunction) => {
    const dto = req.body as ReaderDto;
    const reader: Reader = convertDtoToReader(dto);
    const result = await this.service.addReader(reader);
    res.status(201).json({message: "Reader was added successfully"});
  }

  getReaderById = async (req: Request, res: Response, next: NextFunction) => {
    const readerId = req.params.id;
    const result = await this.service.getReaderById(+readerId);
    res.status(200).json(result);
  }

  getAllReaders = async (req: Request, res: Response, next: NextFunction) => {
    const result = await this.service.getAllReaders();
    res.status(200).json(result);
  }

  setStatus = async (req: Request, res: Response, next: NextFunction) => {
    const readerId = +req.query.id!;
    const status = req.query.status;
    const result = await  this.service.setStatus(readerId, status as string);
    res.send(`Set status: ${status}`);
  }
}

export const readerController = new ReaderController();