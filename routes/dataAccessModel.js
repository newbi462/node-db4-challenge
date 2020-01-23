const db = require('../data/db.js');

module.exports = {
  getRecipes,
  getShoppingList,
}


function getRecipes() {
  return db.select("*").from("recipe");
}

function getShoppingList(passedrecipe_id) {
  return db("ingredientLinkQty")
    .join("quantity", "ingredientLinkQty.quantityID", "quantity.id" )
    .join("recipeIngredientPair", "ingredientLinkQty.recipeIngredientPairID", "recipeIngredientPair.id" )
    .join("ingredient", "recipeIngredientPair.ingredientID", "ingredient.id" )
    .select("quantity.quantity", "ingredient.ingredient")
    .where("recipeIngredientPair.recipe_id", passedrecipe_id);
}

/*

return db("steps")
    .join("schemes", "steps.scheme_id", "schemes.id" )
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions" )
    .where({scheme_id: idPassed})
    .orderBy('step_number', 'asc')

getShoppingList(recipe_id):
  should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

*/
