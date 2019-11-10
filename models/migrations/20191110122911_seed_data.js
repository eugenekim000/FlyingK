const truckStopData = require("../../truckStopData");
exports.up = function(knex, Promise) {
  const seed = [];

  for (const location of truckStopData) {
    const siteId = location.id;
    const address = location.address;
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
    seed.push({
      siteId,
      address,
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
  return knex("locations").insert(seed);
};

exports.down = function(knex, Promise) {};
