import testsRepository from "../repositories/testsRepository.js";

interface Filter {
    groupBy: "disciplines" | "teachers";
  }

async function find(filter: Filter) {
    if (filter.groupBy === "disciplines") {
      return testsRepository.getTestsByDiscipline();
    } else if (filter.groupBy === "teachers") {
      return testsRepository.getTestsByTeacher();
    }
  }

export default {
    find
}