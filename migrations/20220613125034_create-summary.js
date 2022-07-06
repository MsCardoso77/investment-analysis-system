/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("summary", function (table) {
    table.increments("id");
    table.integer("id_user").references("user");
    table.string("name", 255);
    table.json("table_data");
    table.string("environment", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("summary");
};
