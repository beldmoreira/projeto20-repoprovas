import { Request,Response } from "express";
import testServices from "../services/testServices.js";

async function getTests(req: Request, res: Response) {
const { groupBy } = req.query as { groupBy: string };

if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

const tests = await testServices.find({ groupBy });
res.send({ tests });
}


export default {
    getTests
}