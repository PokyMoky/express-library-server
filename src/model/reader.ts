export type ReaderDto = {
  id: number;
  name: string;
}

export type Reader = {
  id: number;
  name: string;
  status: ReaderStatus;
}

export enum ReaderStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}