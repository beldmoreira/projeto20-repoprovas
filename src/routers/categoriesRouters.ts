import {Router} from "express";
import categoryController from "../controllers/categoryController.js";
import {ensureAuthenticatedMiddleware} from "../middlewares/authMiddleware.js"

const categoriesRouter = Router();
categoriesRouter.get("/categories",ensureAuthenticatedMiddleware, categoryController.getCategories)

export default categoriesRouter;