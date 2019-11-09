import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { width } from "window-size";
import "../Map.css";

const MyMap = withGoogleMap((props) => (
  <GoogleMap
    className="googleMap"
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
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
        onFocus={() => {}}
      />
    ))}
    {props.selectedPlace && (
      <InfoWindow
        pixelOffset={{ lat: 300, lng: 300, anchorPoint: 300 }}
        className="infoWindow"
        position={props.position}
        marker={props.activeMarker}
        onCLick={() => {
          console.log(props);
        }}
        visible={props.showingInfoWindow}
      >
        <div>
          <h1>{props.selectedPlace.name}</h1>
          <p>{props.selectedPlace.locationType}</p>
        </div>
      </InfoWindow>
    )}
  </GoogleMap>
));

class Map extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      position: { lat: 42.362667, lng: -73.429423 },
      selectedPlace: "",
    };
  }

  onMarkerHover = (props, marker, e) => {
    console.log(props);
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
          containerElement={<div className="mapContainer" />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
          markers={this.props.locations}
          getByState={this.props.getByState}
          position={this.state.position}
          visible={this.state.showingInfoWindow}
          selectedPlace={this.state.selectedPlace}
        />
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default Map;
