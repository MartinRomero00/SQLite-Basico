import { Router } from "express";
import databaseRouter from "./databaseRouter.js";

const mainRouter = Router();

mainRouter.use('/data', databaseRouter);

export default mainRouter;