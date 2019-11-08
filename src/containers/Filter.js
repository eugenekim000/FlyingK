import { connect } from "react-redux";
import Filter from "../components/Filter";
import { getLocations } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => {
      const res = getLocations();
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
