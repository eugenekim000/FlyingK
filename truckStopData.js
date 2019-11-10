const fs = require("fs");
const dataPlucker = (location) => {
  const getTruckservices = (CustomFields) => {
    const truckServices = CustomFields.filter(
      (cf) => cf.CustomField.Section === "Select Truck Services"
    ).map((cf) => cf.CustomField.Name);
    return truckServices.join(", ");
  };

  const getAmenities = (AdditionalAmenities) => {
    const amenities = AdditionalAmenities.map(
      (aa) => aa.SiteManagementItem.Title
    );
    return amenities.join(", ");
  };

  const getSelectAmenities = (CustomFields) => {
    const selectAmenities = CustomFields.filter(
      (cf) => cf.CustomField.Section === "Select Amenities"
    ).map((cf) => cf.CustomField.Name);
    return selectAmenities.join(", ");
  };

  const getRestaurants = (Concepts) => {
    const restaurants = Concepts.map((c) => c.Concept.Name);
    return restaurants.join(", ");
  };

  const getFuelPrices = (FuelPrices) => {
    const products = FuelPrices.map((fp) => {
      return `${fp.ProductName}:${fp.FuelType}:$${fp.CashPrice}`;
    });

    return products.join(", ");
  };

  return {
    id: location.SiteId,
    address: `${location.Addresses[0].Address1}, ${
      location.Addresses[0].City
    }, ${location.Addresses[0].State} ${location.Addresses[0].Zip}`,
    latitude: location.Site.Latitude,
    longitude: location.Site.Longitude,
    name: location.Name,
    state: location.Addresses[0].State,
    city: location.Addresses[0].City,
    highway: location.Site.Highway,
    locationType: location.FacilitySubtype.Name,
    truckServices: getTruckservices(location.CustomFields),
    amenities: getAmenities(location.AdditionalAmenities),
    selectAmenities: getSelectAmenities(location.CustomFields),
    restaurants: getRestaurants(location.Site.Concepts),
    fuelPrices: getFuelPrices(location.Site.FuelPrices),
  };
};

const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
const data = locations.map((location) => dataPlucker(location));
module.exports = data;
