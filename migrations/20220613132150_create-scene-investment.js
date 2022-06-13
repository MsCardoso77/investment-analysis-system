/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("scene_investment", function (table) {
    table.increments("id");
    table.double("invest_value");
    table.integer("id_investment").references("investment");
    table.integer("id_scene").references("scene");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("scene_investment");
};
