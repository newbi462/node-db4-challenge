exports.seed = function(knex, Promise) {
  return knex("steps").truncate()
    .then(function () {
      return knex("steps").insert([
        {
          quantity: "COOK DAM YOU"
        },

      ]);
    });
};

/*
steps
ID	steps
1	COOK DAM YOU
*/
