import { getMarkers } from "../utils";

export function getLocations() {
  return function(dispatch) {
    console.log(`get locations from action`);
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
  console.log(`get by state from action`);
  console.log(`state`, state);
  return {
    type: "GET_STATES",
    input: state,
  };
}
