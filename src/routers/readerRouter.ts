import express from "express";
import {readerController} from "../controllers/ReaderController";

const readerRouter = express.Router();

readerRouter.post("/", readerController.addReader);
readerRouter.get("/", readerController.getAllReaders);
readerRouter.get("/:id", readerController.getReaderById);
readerRouter.patch("/", readerController.setStatus);

export default readerRouter;