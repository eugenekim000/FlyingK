require("dotenv").config();
module.exports = {
  db: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: "./models/migrations",
    },
  },
};
