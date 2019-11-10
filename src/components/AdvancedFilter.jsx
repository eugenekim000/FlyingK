import React, { Component } from "react";
import "../css/AdvancedFilter.css";

class AdvancedFilter extends Component {
  render() {
    return (
      <div className="AdvancedFilter">
        <div className="a-filters-title">Advanced Filters</div>
        <div className="filters-wrapper">
          <div className="a-filter-wrapper">
            <h3>Type of Stop</h3>
            <div className="type-of-stop a-filter-container">
              <div className="travel-stop-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Travel Stop"
                  onChange={(e) => {
                    if (e.target.checked) {
                      this.props.getByType(e.target.value);
                    }
                  }}
                />
                Travel Stop
              </div>

              <div className="country-store-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Country Store"
                  onChange={(e) => {
                    if (e.target.checked) this.props.getByType(e.target.value);
                  }}
                />
                Country Store
              </div>
            </div>
          </div>
          <div className="a-filter-wrapper">
            <h3>Food</h3>
            <div className="food a-filter-container">
              <div className="arbys-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Arby's"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByRestaurants(e.target.value);
                  }}
                />
                Arby's
              </div>

              <div className="godfather-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Godfather's Pizza"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByRestaurants(e.target.value);
                  }}
                />
                Godfather's Pizza
              </div>

              <div className="subway-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Subway"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByRestaurants(e.target.value);
                  }}
                />
                Subway
              </div>

              <div className="flyingk-subs-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="FlyingK Subs"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByRestaurants(e.target.value);
                  }}
                />
                FlyingK Subs
              </div>

              <div className="mcdonalds-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="McDonald's"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByRestaurants(e.target.value);
                  }}
                />
                McDonald's
              </div>
            </div>
          </div>
          <div className="a-filter-wrapper">
            <h3>Amenities</h3>
            <div className="amenities a-filter-container">
              <div className="24-hour-service-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="24-Hour Road Service"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByAmenities(e.target.value);
                  }}
                />
                24-Hour Road Service
              </div>

              <div className="overnight-parking-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Overnight Parking"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByAmenities(e.target.value);
                  }}
                />
                Overnight Parking
              </div>

              <div className="open-24-hours-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="Open 24-Hours"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByAmenities(e.target.value);
                  }}
                />
                Open 24-Hours
              </div>
            </div>
          </div>
          <div className="a-filter-wrapper">
            <h3>Truck Services</h3>
            <div className="truck-services a-filter-container">
              <div className="national-tire-account-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="NationalTireAccount"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByService(e.target.value);
                  }}
                />
                National Tire Account
              </div>

              <div className="tire-pass-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="TirePass"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByService(e.target.value);
                  }}
                />
                Tire Pass
              </div>

              <div className="light-mechanical-check checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="LightMechanical"
                  onChange={(e) => {
                    if (e.target.checked)
                      this.props.getByService(e.target.value);
                  }}
                />
                Light Mechanical
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedFilter;
