import React, { Component } from "react";
import "../css/SearchResults.css";

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <h1 className="search-results-title">Search Results</h1>
        {this.props.locations.map((location) => {
          return (
            <div key={location.data.id} className="search-result-card">
              <h3>{location.data.name.split("-").join(" ")}</h3>
              <div className="address-info-window">
                <h5>{location.data.address || "None"}</h5>
              </div>
              <div className="truck-services-info-window">
                <strong>Truck Services</strong>
                <h5>
                  <br />

                  {location.data.truckServices || "None"}
                </h5>
              </div>
              <div className="amenities-info-window">
                <strong>Amenities</strong>
                <h5>
                  <br />

                  {location.data.amenities || "None"}
                </h5>
              </div>
              <div className="select-amenities-info-window">
                <strong>Select Amenities </strong>
                <h5>
                  <br />

                  {location.data.selectAmenities || "None"}
                </h5>
              </div>
              <div className="restaurants-info-window">
                <strong> Restaurants </strong>
                <h5>
                  <br />

                  {location.data.restaurants || "None"}
                </h5>
              </div>
              <div className="fuel-prices-info-window">
                <strong> Fuel Prices </strong>
                <h5>
                  <br />
                  {location.data.fuelPrices.split(":").join(" ") || "None"}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchResults;
