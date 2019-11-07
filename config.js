// module.exports = {
//   db: {
//     client: "pg",
//     connection: process.env.DATABASE_URL || {
//       host:
//         process.env.DB_HOST || "ec2-174-129-253-180.compute-1.amazonaws.com",
//       port: process.env.DB_PORT || 5432,
//       database: process.env.DB_NAME || "dba446ehc6nd9i",
//       user: process.env.DB_USER || "uzqkbgoowoptjy",
//       password:
//         process.env.DB_PASSWORD ||
//         "a96af0db0012aa1ca5c0e9964bf66dcef65e26ffd0ed7774382821bb60c44ba6",
//     },
//     migrations: {
//       tableName: "knex_migrations",
//       directory: "./models/migrations",
//     },
//     ssl: true,
//   },
// };

module.exports = {
  db: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "trucko",
      user: process.env.DB_USER || "VICSIDIOUS",
      password: process.env.DB_PASSWORD || "VICSIDIOUS",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./models/migrations",
    },
  },
};
