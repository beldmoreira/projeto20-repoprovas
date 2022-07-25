import { prisma } from "../config/database.js";

async function findMany() {
    return prisma.category.findMany();
  }
  
  export default {
    findMany
  };