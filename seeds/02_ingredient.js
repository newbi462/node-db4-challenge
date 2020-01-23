exports.seed = function(knex, Promise) {
  return knex("ingredient").truncate()
    .then(function () {
      return knex("ingredient").insert([
        {
          ingredient: "flower"
        },
        {
          ingredient: "milk"
        },
        {
          ingredient: "egg"
        },

      ]);
    });
};

/*
ingredient
ID	ingredient
1	flower
2	milk
3	egg

*/
