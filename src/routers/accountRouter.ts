import express from "express";
import {accountController} from "../controllers/AccountController";
import {bodyValidator, readerIdValidator} from "../middleware/bodyValidator";
import {createReaderJoiSchema, updatePasswordSchema, updateReaderJoiSchema} from "../utils/joiSchemas";

const accountRouter = express.Router();

accountRouter.post("/", bodyValidator(createReaderJoiSchema), accountController.createReader);
accountRouter.get("/byId", readerIdValidator, accountController.getAccountById);
accountRouter.delete('/', readerIdValidator, accountController.removeAccount);
accountRouter.patch("/password", bodyValidator(updatePasswordSchema), accountController.changePassword);
accountRouter.patch("/update", readerIdValidator, bodyValidator(updateReaderJoiSchema), accountController.editAccount);

export default accountRouter;