const db = require("../server/knex");
const truckStopData = require("../truckStopData");

console.log("Seeding data...");
(async () => {
  try {
    for (const location of truckStopData) {
      const siteId = location.id;
      const latitude = location.latitude;
      const longitude = location.longitude;
      const name = location.name;
      const state = location.state;
      const city = location.city;
      const highway = location.highway;
      const locationType = location.locationType;
      const truckServices = location.truckServices;
      const amenities = location.amenities;
      const selectAmenities = location.selectAmenities;
      const restaurants = location.restaurants;
      const fuelPrices = location.fuelPrices;

      const result = await db("locations").insert({
        siteId,
        latitude,
        longitude,
        name,
        state,
        city,
        highway,
        locationType,
        truckServices,
        amenities,
        selectAmenities,
        restaurants,
        fuelPrices,
      });
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
