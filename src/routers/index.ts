import { Router } from "express";
import userRouter from "./userRouters.js";
import categoryRouter from "./categoriesRouters.js";

const router = Router();

router.use(userRouter);
router.use(categoryRouter);

export default router;