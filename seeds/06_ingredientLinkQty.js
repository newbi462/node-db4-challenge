exports.seed = function(knex, Promise) {
  return knex("ingredientLinkQty").truncate()
    .then(function () {
      return knex("ingredientLinkQty").insert([
        {
          quantityID: 3,
          recipeIngredientPairID: 1
        },
        {
          quantityID: 1,
          recipeIngredientPairID: 2
        },
        {
          quantityID: 1,
          recipeIngredientPairID: 3
        },
        {
          quantityID: 4,
          recipeIngredientPairID: 4
        },
        {
          quantityID: 2,
          recipeIngredientPairID: 5
        },
        {
          quantityID: 2,
          recipeIngredientPairID: 6
        },

      ]);
    });
};

/*
ingredientLinkQty
ID	quantityID	recipeIngredientPairID
  1	3	1
  2	1	2
  3	1	3
  4	4	4
  5	2	5
6	2	6
*/
