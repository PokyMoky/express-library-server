"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.PORT = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.PORT = 3055;
exports.pool = promise_1.default.createPool({
    host: process.env.SQL_HOST,
    port: +process.env.SQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB_NAME
});
