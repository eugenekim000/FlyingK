import React, { Component } from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
    onClick={() => {
      console.log("Map Clicked");
    }}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.key}
        {...marker}
        onClick={() => {
          props.getByState(marker.data.state);
        }}
      />
    ))}
  </GoogleMap>
));

class Map extends Component {
  async componentDidMount() {
    if (this.props.locations.length <= 0) {
      this.props.getLocations();
    }
  }

  render() {
    return process.env.npm_lifecycle_event === "test" ? (
      <div />
    ) : (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {
          // console.log();
        }}
        onMapClick={() => {}}
        markers={this.props.locations}
        onClick={() => {}}
        getByState={this.props.getByState}
      />
    );
  }
}

Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default Map;
