exports.seed = function(knex, Promise) {
  return knex("recipeIngredientPair").truncate()
    .then(function () {
      return knex("recipeIngredientPair").insert([
        {
          recipeID: 1,
          ingredientID: 1
        },
        {
          recipeID: 1,
          ingredientID: 2
        },
        {
          recipeID: 1,
          ingredientID: 3
        },
        {
          recipeID: 2,
          ingredientID: 1
        },
        {
          recipeID: 2,
          ingredientID: 2
        },
        {
          recipeID: 2,
          ingredientID: 3
        },

      ]);
    });
};

/*
recipeIngredientPair
ID	recipeID	ingredientID
  1	1	1
  2	1	2
  3	1	3
4	2	1
5	2	2
6	2	3
*/
