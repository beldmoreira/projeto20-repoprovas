import {User} from "@prisma/client";
import userRepository from "../repositories/userRepository.js";
import { conflictError, unauthorizedError,notFoundError } from "../utils/errorUtils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });


export type CreateUserData = Omit<User, "id">;

async function signIn(login:CreateUserData){
    const user = await gettingUserOrFail(login);

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return token;
}

async function signUp(createUserData: CreateUserData){
    const userExists = await userRepository.findUserByEmail(createUserData.email);
    if(userExists) {
        throw conflictError("This email address is already in use");
      }
    const hashedPassword = bcrypt.hashSync(createUserData.password,12)
    await userRepository.insert({...createUserData,password:hashedPassword})
}

async function findUserById (id:number) {
    const user = await userRepository.findById(id);
    if (!user) throw notFoundError("User not found");
  
    return user;
  }


async function gettingUserOrFail(login: CreateUserData){
    const user = await userRepository.findUserByEmail(login.email)
    if(!user){
        throw unauthorizedError("Invalid credentials")
    }

    const checkPassword = bcrypt.compareSync(login.password, user.password);
    if(!checkPassword){
        throw unauthorizedError("Invalid credentials")
    }

    return user;
}

export default{
    signIn,
    signUp,
    gettingUserOrFail,
    findUserById
}