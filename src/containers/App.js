import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps)(App);
