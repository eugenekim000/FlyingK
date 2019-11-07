import axios from "axios";

export async function getMarkers() {
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
  const markers = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
    data: {
      id: l.id,
      name: l.name,
      state: l.state,
      city: l.city,
      highway: l.highway,
      locationType: l.locationType,
      truckServices: l.truckServices,
      amenities: l.amenities,
      selectAmenities: l.selectAmenities,
      restaurants: l.restaurants,
      fuelPrices: l.fuelPrices,
    },
  }));
  return markers;
}
