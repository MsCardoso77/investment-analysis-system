/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.increments("id");
    table.string("name", 255);
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("user");
};
