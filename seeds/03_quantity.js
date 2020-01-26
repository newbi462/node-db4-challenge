exports.seed = function(knex, Promise) {
  return knex("quantity").truncate()
    .then(function () {
      return knex("quantity").insert([
        {
          quantity: 1
        },
        {
          quantity: 2
        },
        {
          quantity: 3
        },
        {
          quantity: 4
        },

      ]);
    });
};

/*
quantity
ID	quantity
1	1
2	2
3	3
4	4
*/
