import axios from "axios";
// import locations from "../data/truckStopData";

export async function getMarkers() {
  const { data: locations } = await axios.get(
    "https://ccx-react-b-project-staging.herokuapp.com/api/locations"
  ); // ES6 destructuring & aliasing
  const markers = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
    data: {
      id: l.id,
      address: l.address,
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
