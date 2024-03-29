const defaultState = {
  locations: [],
  backup: [],
};

const equal = (a, b) => a === b;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: action.locations,
        backup: action.locations,
      };
    case "GET_STATES":
      return {
        ...state,
        locations: state.backup.filter((location) =>
          equal(location.data.state, action.input)
        ),
      };
    case "GET_CITIES": {
      const clone = state.locations;

      return {
        ...state,
        locations: clone.filter((location) => {
          return equal(location.data.city, action.input);
        }),
      };
    }
    case "GET_HIGHWAYS":
      return {
        ...state,
        locations: state.backup.filter((location) =>
          equal(location.data.highway, action.input)
        ),
      };
    case "GET_TRUCK_SERVICES":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          location.data.truckServices.includes(action.input)
        ),
      };
    case "GET_TYPE":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          equal(location.data.locationType, action.input)
        ),
      };
    case "GET_AMENITIES":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          location.data.amenities.includes(action.input)
        ),
      };
    case "GET_RESTAURANTS":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          equal(location.data.restaurants, action.input)
        ),
      };
    case "GO_HOME":
      return {
        ...state,
        locations: state.backup,
      };
    default:
      return state;
  }
};

export default reducer;
