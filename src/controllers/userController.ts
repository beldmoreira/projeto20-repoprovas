import { Request,Response } from "express";
import userServices from "../services/userServices.js";

async function signIn (req: Request, res: Response){
    const user = req.body
    const token = await userServices.signIn(user);
    res.send(token)
}

async function signUp (req: Request, res: Response) {
    const user = req.body
    const token = await userServices.signUp(user);
    res.sendStatus(201);
}

export default {
    signIn,
    signUp
}