import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps)(SearchResults);
