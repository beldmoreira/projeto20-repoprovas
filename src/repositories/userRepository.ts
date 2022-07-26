import { prisma } from "../config/database.js";
import { CreateUserData } from "../services/userServices.js";


 async function findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
 async function insert(createUserData:CreateUserData) {
    return prisma.user.create({
        data: createUserData,
    });
}

async function findById(id:number) {
  return prisma.user.findUnique({
    where:{
      id,
},
  });
}

export default{
    findUserByEmail,
    insert,
    findById
}