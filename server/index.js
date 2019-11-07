const app = require("./app");
const db = require("./knex");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate
      .latest()
      .then(() => {
        console.log("Migrations ran!");
      })
      .then(() => {
        // import data seeding script
        const seed = require("../data/import");
      })
      .then(() => {
        console.log("Data seeded!");
      });

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
