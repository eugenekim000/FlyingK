import { getMarkers } from "../utils";

export function getLocations() {
  return function(dispatch) {
    return (async () => {
      const locations = await getMarkers();
      dispatch(setLocations(locations));
    })();
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}

export function getByState(state) {
  return {
    type: "GET_STATES",
    input: state,
  };
}

export function getByCity(city) {
  return { type: "GET_CITIES", input: city };
}

export function getByHighway(highway) {
  return { type: "GET_HIGHWAYS", input: highway };
}

export function getByType(type) {
  return { type: "GET_TYPE", input: type };
}

export function getByRestaurants(food) {
  return { type: "GET_RESTAURANTS", input: food };
}

export function getByService(service) {
  return { type: "GET_TRUCK_SERVICES", input: service };
}

export function getByAmenities(service) {
  return { type: "GET_AMENITIES", input: service };
}
