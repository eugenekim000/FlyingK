const defaultState = {
  locations: [],
  backup: [],
};

const equal = (a, b) => a === b;

const photos = (state = defaultState, action) => {
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
        locations: state.locations.filter((location) =>
          equal(location.state, action.input)
        ),
      };
    case "GET_CITIES":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          equal(location.city, action.input)
        ),
      };
    case "GET_HIGHWAYS":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          equal(location.highway, action.input)
        ),
      };
    case "GET_TRUCK_SERVICES":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          action.input.every((value) => location.truckServices.includes(value))
        ),
      };
    case "GET_TYPE":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          action.input.every((value) => location.type.includes(value))
        ),
      };
    case "GET_AMENITIES":
      return {
        ...state,
        locations: state.locations.filter((location) =>
          action.input.every((value) => location.amenities.includes(value))
        ),
      };
    case "GET_":
      return;
    case "GO_HOME":
      return {
        ...state,
        locations: state.backup,
      };
    default:
      return state;
  }
};

export default photos;
