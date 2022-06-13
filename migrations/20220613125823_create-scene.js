/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("scene", function (table) {
    table.increments("id");
    table.string("name", 255);
    table.string("percent", 255).notNullable();
    table.integer("id_summary").references("summary");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("scene");
};
