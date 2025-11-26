import {AccountService} from "./AccountService";
import {Reader, UpdateReaderDto} from "../model/reader";

class AccountServiceImplMongo implements AccountService {

  createAccount(reader: Reader): Promise<void> {

    return Promise.resolve(undefined);
  }

  getAccount(id: number): Promise<Reader> {
    throw ""
    // return Promise.resolve(undefined);
  }

  removeAccount(id: number): Promise<Reader> {
    throw ""
    // return Promise.resolve(undefined);
  }

  changePassword(id: number, newPassword: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  editAccount(id: number, newReaderData: UpdateReaderDto): Promise<Reader> {
    throw ""
    // return Promise.resolve(undefined);
  }
}

export const accountServiceMongo = new AccountServiceImplMongo();