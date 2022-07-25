import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';
import {prisma} from "../../src/config/database.js";

function test (){
return {
  name:faker.name.findName,
  pdfUrl:faker.internet.url, 
  categoryId:1, 
  teacherDisciplineId: 1
}
}

const testsFactory = {
    test
}



export default testsFactory;