const truckStopData = require("../../truckStopData");
exports.up = function(knex, Promise) {
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

    return knex("locations").insert({
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
};

exports.down = function(knex, Promise) {};
