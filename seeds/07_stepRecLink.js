exports.seed = function(knex, Promise) {
  return knex("stepRecLink").truncate()
    .then(function () {
      return knex("stepRecLink").insert([
        {
          recipeID: 1,
          stepsID: 1
        },
        {
          recipeID: 2,
          stepsID: 1
        },

      ]);
    });
};

/*
stepRecLink
ID	recipeID	stepsID
1	1	1
2	2	1

*/
