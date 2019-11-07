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
