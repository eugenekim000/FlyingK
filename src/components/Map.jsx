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
          <h2>{props.selectedPlace.name}</h2>
          <h5>
            <strong>Truck Services: </strong>
            {props.selectedPlace.truckServices}
          </h5>
          <h5>
            <strong>Amenities: </strong>
            {props.selectedPlace.amenities}
          </h5>
          <h5>
            <strong>Select Amenities: </strong>
            {props.selectedPlace.selectAmenities}
          </h5>
          <h5>
            <strong> Restaurants: </strong>
            {props.selectedPlace.restaurants}
          </h5>
          <h5>
            <strong> Fuel Prices: </strong>
            {props.selectedPlace.fuelPrices}
          </h5>
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
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
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
