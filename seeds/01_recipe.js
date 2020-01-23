exports.seed = function(knex, Promise) {
  return knex("recipe").truncate()
    .then(function () {
      return knex("recipe").insert([
        {
          name: "CAKE"
        },
        {
          name: "PAN CAKE"
        },

      ]);
    });
};

/*
ID	NAME OF RECIPE
1	CAKE
2	PAN CAKE

*/
