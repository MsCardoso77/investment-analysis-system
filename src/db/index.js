import knex from "knex";
import config from "../../knexfile";

const env = "development";

const connection = knex(config[env]);

export default connection;
