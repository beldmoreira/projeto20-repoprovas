import categoryRepository from "../repositories/categoryRepository.js";

async function findCategories (){
    return categoryRepository.findMany()

}

export default{
    findCategories
}