const config = require("../config");
const db = require("knex")(config.db);
module.exports = db;
