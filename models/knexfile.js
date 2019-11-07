const config = require("../config");

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://uzqkbgoowoptjy:a96af0db0012aa1ca5c0e9964bf66dcef65e26ffd0ed7774382821bb60c44ba6@ec2-174-129-253-180.compute-1.amazonaws.com:5432/dba446ehc6nd9i",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    ssl: true,
  },
};
