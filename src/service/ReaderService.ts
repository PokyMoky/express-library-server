import {Reader} from "../model/reader";

export interface ReaderService {
  addReader: (reader: Reader) => Promise<void>;
  getReaderById: (readerId: number) => Promise<Reader>;
  getAllReaders: () => Promise<Reader[]>;
  setStatus: (id: number, status: string) => Promise<void>;
}