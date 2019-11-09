import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

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
        onMouseOver={(e) => {
          props.onMarkerHover(marker.data, marker, e);
        }}
      />
    ))}
  </GoogleMap>
));

class Map extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      position: { lat: 42.362667, lng: -73.429423 },
      selectedPlace: {},
    };
  }

  onMarkerHover = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      position: marker.position,
      showingInfoWindow: true,
    });
  };

  async componentDidMount() {
    if (this.props.locations.length <= 0) {
      this.props.getLocations();
    }
  }

  render() {
    return process.env.npm_lifecycle_event === "test" ? (
      <div />
    ) : (
      <React.Fragment>
        <MyMap
          className="test"
          onMarkerHover={this.onMarkerHover}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={() => {}}
          onMapClick={() => {}}
          markers={this.props.locations}
          onClick={() => {}}
          getByState={this.props.getByState}
        />
        {this.state.position && (
          <InfoWindow
            position={this.state.position}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        )}
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default Map;
