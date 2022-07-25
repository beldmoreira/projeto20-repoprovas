import {Router} from "express";
import testsController from "../controllers/testsController.js"
import {ensureAuthenticatedMiddleware} from "../middlewares/authMiddleware.js";

const testsRouter = Router()
testsRouter.get("/tests", ensureAuthenticatedMiddleware, testsController.getTests)

export default testsRouter;
