import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
// import { width } from "window-size";
import "../css/Map.css";

const MyMap = withGoogleMap((props) => (
  <GoogleMap
    // defaultOptions={{
    //   scrollwheel: false,
    // }}
    className="googleMap"
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
    setCenter={props.center}
    onClick={() => {
      console.log("Map Clicked");
    }}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.key}
        {...marker}
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
        onClick={() => {
          console.log(props);
        }}
        visible={props.showingInfoWindow}
      >
        <div id="infoWindow">
          <h3>{props.selectedPlace.name.split("-").join(" ")}</h3>
          <p>{props.selectedPlace.address}</p>
          <h4>{props.selectedPlace.locationType}</h4>
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
      position: { lat: 39.8283, lng: -98.5795 },
      selectedPlace: "",
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
          containerElement={<div className="mapContainer" />}
          mapElement={
            <div
              style={{ height: `100%`, width: `100%`, borderRadius: "5px" }}
            />
          }
          scrollwheel={false}
          markers={this.props.locations}
          getByState={this.props.getByState}
          position={this.state.position}
          visible={this.state.showingInfoWindow}
          selectedPlace={this.state.selectedPlace}
          center={this.props.position}
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
