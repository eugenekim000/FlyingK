import { connect } from "react-redux";
import AdvancedFilter from "../components/AdvancedFilter";
import {
  getLocations,
  getByState,
  getByCity,
  getByHighway,
  getByType,
  getByRestaurants,
  getByService,
  getByAmenities,
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
    getByType: (type) => {
      const res = getByType(type);
      dispatch(res);
    },
    getByRestaurants: (food) => {
      const res = getByRestaurants(food);
      dispatch(res);
    },
    getByService: (service) => {
      const res = getByService(service);
      dispatch(res);
    },
    getByAmenities: (amenity) => {
      const res = getByAmenities(amenity);
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
)(AdvancedFilter);
