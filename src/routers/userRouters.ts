import { Router } from "express";
import userController from "../controllers/userController.js";
import joiValidation from "../middlewares/joiValidation.js";
import {ensureAuthenticatedMiddleware} from "../middlewares/authMiddleware.js"
import { userSchema } from "../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post("/signin", joiValidation(userSchema),userController.signIn)
userRouter.post("/signup", joiValidation(userSchema),userController.signUp)

export default userRouter;