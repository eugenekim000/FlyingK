exports.up = function(knex) {
  return knex.schema
    .createTable("locations", (table) => {
      table.increments().index();
      table.integer("siteId");
      table.float("latitude");
      table.float("longitude");
      table.text("name");
      table.text("state");
      table.text("city");
      table.text("highway");
      table.text("locationType");
      table.text("truckServices");
      table.text("amenities");
      table.text("selectAmenities");
      table.text("restaurants");
      table.text("fuelPrices");
    })
    .then(() => {
      console.log("Seeded!");
    });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("locations");
};
