import { connect } from "react-redux";
import Filter from "../components/Filter";
import {
  getLocations,
  getByState,
  getByCity,
  getByHighway,
} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => {
      const res = getLocations();
      dispatch(res);
    },
    getByState: (state) => {
      const res = getByState(state); // this is a dispatch from action
      dispatch(res); // this action goes to reducer
    },
    getByCity: (city) => {
      const res = getByCity(city);
      dispatch(res);
    },
    getByHighway: (highway) => {
      const res = getByHighway(highway);
      dispatch(res);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
