exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", table => {
        table.increments();
        table.string("name").notNullable().index();
    })
    .createTable("ingredient", table => {
        table.increments();
        table.string("ingredient").notNullable().index();
    })
    .createTable("quantity", table => {
        table.increments();
        table.string("quantity").notNullable().index();
    })
    .createTable("steps", table => {
        table.increments();
        table.string("steps").notNullable().index();
    })
    .createTable("recipeIngredientPair", table => {
        table.increments();
        table.integer("recipeID")
          .unsigned()
          .notNullable()
          .references("id").inTable("recipe")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        table.integer("ingredientID")
          .unsigned()
          .notNullable()
          .references("id").inTable("ingredient")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
    })
    .createTable("ingredientLinkQty", table => {
        table.increments();
        table.integer("quantityID")
          .unsigned()
          .notNullable()
          .references("id").inTable("quantity")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        table.integer("recipeIngredientPairID")
          .unsigned()
          .notNullable()
          .references("id").inTable("recipeIngredientPair")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
    })
    .createTable("stepRecLink", table => {
        table.increments();
        table.integer("recipeID")
          .unsigned()
          .notNullable()
          .references("id").inTable("recipe")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        table.integer("stepsID")
          .unsigned()
          .notNullable()
          .references("id").inTable("steps")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("stepRecLink")
    .dropTableIfExists("ingredientLinkQty")
    .dropTableIfExists("recipeIngredientPair")
    .dropTableIfExists("steps")
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipe");
};

/*


*/
