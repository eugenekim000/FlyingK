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
