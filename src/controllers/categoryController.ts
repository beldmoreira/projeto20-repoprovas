import { Request,Response } from "express";
import categoryServices from "../services/categoryServices.js";

async function getCategories(req: Request, res: Response) {
    const categories = await categoryServices.findCategories();
    res.send({ categories })
}

export default {
    getCategories
}