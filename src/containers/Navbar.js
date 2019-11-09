import { connect } from "react-redux";
import Navbar from "../components/Navbar";
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
)(Navbar);
