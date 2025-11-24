import mysql from "mysql2/promise"

export const PORT = 3055;

export const createPool = () => {
  return mysql.createPool({
    host: process.env.SQL_HOST,
    port: +process.env.SQL_PORT!,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB_NAME
  });
};
