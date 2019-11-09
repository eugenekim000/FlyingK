import { connect } from "react-redux";
import Filter from "../components/Filter";
import { getLocations, getByState } from "../actions/index";

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
