import joi from "joi";
import { CreateUserData } from "../services/userServices.js";

export const userSchema = joi.object<CreateUserData>({
    email:joi.string().required(),
    password:joi.string().required()
})