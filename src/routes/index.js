import { Router } from "express";
import productRouter from "./productRouter.js";

const mainRouter = Router();

mainRouter.use('/products', productRouter);

export default mainRouter;