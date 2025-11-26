// import {AccountService} from "./AccountService";
// import {Reader, ReaderStatus} from "../model/reader";
// import {pool} from "../app";
// import {HttpError} from "../errorHandler/HttpError";
//
// class ReaderServiceSQL implements AccountService {
//   async addReader(reader: Reader): Promise<void> {
//     try {
//       const result = await pool.query(`INSERT INTO readers
//                                  VALUES (?, ?, ?)`,
//         [reader.id, reader.name, reader.status]);
//     } catch (error) {
//       let message = `Could not add reader`;
//       if (error instanceof Error) {
//         message = error.message;
//       }
//       throw new HttpError(400, message)
//     }
//   }
//
//   async getAllReaders(): Promise<Reader[]> {
//     const result = await pool.query(`SELECT *
//                                      FROM readers`);
//     return result[0] as Reader[];
//   }
//
//   async getReaderById(readerId: number): Promise<Reader> {
//     const [rows] = await pool.query(`SELECT *
//                                      FROM readers
//                                      WHERE id = ?`,
//       [readerId]) as [Reader[], any];
//     if (rows.length === 0) {
//       throw new HttpError(404, `Reader with id ${readerId} not found`);
//     }
//     return rows[0];
//   }
//
//   async setStatus(readerId: number, status: string): Promise<void> {
//     if (status !== ReaderStatus.ACTIVE && status !== ReaderStatus.INACTIVE) {
//       throw new HttpError(400, `Status ${status} is invalid`);
//     }
//     const result = await pool.query(`UPDATE readers
//                                      SET status = ?
//                                      WHERE id = ?`,
//       [status, readerId]);
//     // @ts-ignore
//     if (result[0].affectedRows === 0) {
//       throw new HttpError(404, `Reader not found.`);
//     }
//   }
// }
//
// export const readerServiceSQL = new ReaderServiceSQL();