import knex from "../db/index.js";

class UserRepositories {
  async getEmail(email) {
    const user = await knex.select().from("user").where({ email }).first();
    return user;
  }
  async createOne(newUser) {
    await knex.insert(newUser).into("user");
  }
}

export default UserRepositories;
