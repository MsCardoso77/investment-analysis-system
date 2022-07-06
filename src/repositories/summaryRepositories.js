import fs from "fs";
import knex from "../db/index.js";

class UserRepositories {
  async getAll() {
    const summaries = await knex.select().from("summary");
    return summaries;
  }
  async getOne(id) {
    const summaries = await knex.select().from("summary").where(id);
    return summaries;
  }

  async getByUser(id_user) {
    const summaries = await knex.select().from("summary").where({ id_user });
    return summaries;
  }

  async createOne(newSummary) {
    newSummary.table_data = JSON.stringify(newSummary.table_data);
    console.log("repo", newSummary);
    await knex.insert(newSummary).into("summary");
  }
}

export default UserRepositories;
