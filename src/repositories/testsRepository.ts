import { prisma } from "../config/database.js";


async function getTestsByDiscipline() {
    return prisma.term.findMany({
            include: {
              disciplines: {
                include: {
                  teachersDisciplines: {
                    include: {
                      teacher: true,
                      test: {
                        include: {
                          category: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          });
    }

async function getTestsByTeacher() {
    return prisma.teacherDiscipline.findMany({
        include:{
            teacher: true,
            discipline: true,
            test: {
              include: {
                category: true,
              },
            },
          },
        });
}

export default{
    getTestsByDiscipline,
    getTestsByTeacher
}