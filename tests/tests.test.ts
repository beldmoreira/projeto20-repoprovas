import supertest from 'supertest';
import app from "../src/app.js";
import { prisma } from "../src/config/database.js";
import testFactory from "../tests/factories/testsFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Test";`;
});

describe("", () => {

});