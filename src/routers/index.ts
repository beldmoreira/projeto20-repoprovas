import { Router } from "express";
import userRouter from "./userRouters.js";
import categoryRouter from "./categoriesRouters.js";
import testsRouter from "../routers/testsRouters.js"

const router = Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(testsRouter);

export default router;