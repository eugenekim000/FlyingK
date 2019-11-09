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
    defaultZoom={3.2}
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
        onClick={(e) => {
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
          <div className="truck-services-info-window info">
            <h5>
              <strong>Truck Services</strong>
              <br />

              {props.selectedPlace.truckServices || "None"}
            </h5>
          </div>
          <div className="amenities-info-window info">
            <h5>
              <strong>Amenities</strong>
              <br />

              {props.selectedPlace.amenities || "None"}
            </h5>
          </div>
          <div className="select-amenities-info-window info">
            <h5>
              <strong>Select Amenities </strong>
              <br />

              {props.selectedPlace.selectAmenities || "None"}
            </h5>
          </div>
          <div className="restaurants-info-window info">
            <h5>
              <strong> Restaurants </strong>
              <br />

              {props.selectedPlace.restaurants || "None"}
            </h5>
          </div>
          <div className="fuel-prices-info-window info">
            <h5>
              <strong> Fuel Prices </strong>
              <br />
              {props.selectedPlace.fuelPrices.split(":").join(" ") || "None"}
            </h5>
          </div>
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
              style={{ height: `100%`, width: `100%`, "border-radius": "5px" }}
            />
          }
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
