import * as path from "node:path";
import dotenv from "dotenv";

import {launchServer} from "./server";
import * as mongoose from "mongoose";
import mysql from "mysql2/promise";
import {createPool} from "./configuration/appConfig";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const pool = createPool();

mongoose.connect(process.env.ACCOUNT_DB as string).then(() => {
  console.log("Connected to MongoDB");
  launchServer();
})
.catch((err) => {
  console.log(err);
});

// launchServer();
