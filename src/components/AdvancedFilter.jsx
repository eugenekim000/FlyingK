import React, { Component } from "react";
import "../css/AdvancedFilter.css";

class AdvancedFilter extends Component {
  render() {
    return (
      <div className="advanced-filter">
        <h3>Type of stop!</h3>
        <input
          type="checkbox"
          value="Travel Stop"
          onChange={(e) => {
            if (e.target.checked) {
              this.props.getByType(e.target.value);
            }
          }}
        />
        Travel Stop
        <input
          type="checkbox"
          value="Country Store"
          onChange={(e) => {
            if (e.target.checked) this.props.getByType(e.target.value);
          }}
        />
        Country Store
        <p>
          <h3>Food!</h3>
          <input
            type="checkbox"
            value="Arby's"
            onChange={(e) => {
              if (e.target.checked) this.props.getByRestaurants(e.target.value);
            }}
          />
          Arby's
          <input
            type="checkbox"
            value="Godfather's Pizza"
            onChange={(e) => {
              if (e.target.checked) this.props.getByRestaurants(e.target.value);
            }}
          />
          Godfather's Pizza
          <input
            type="checkbox"
            value="Subway"
            onChange={(e) => {
              if (e.target.checked) this.props.getByRestaurants(e.target.value);
            }}
          />
          Subway
          <input
            type="checkbox"
            value="FlyingK Subs"
            onChange={(e) => {
              if (e.target.checked) this.props.getByRestaurants(e.target.value);
            }}
          />
          FlyingK Subs
          <input
            type="checkbox"
            value="McDonald's"
            onChange={(e) => {
              if (e.target.checked) this.props.getByRestaurants(e.target.value);
            }}
          />
          McDonald's
        </p>
        <p>
          <h3>Amenities!</h3>
          <input
            type="checkbox"
            value="24-Hour Road Service"
            onChange={(e) => {
              if (e.target.checked) this.props.getByAmenities(e.target.value);
            }}
          />
          24-Hour Road Service
          <input
            type="checkbox"
            value="Overnight Parking"
            onChange={(e) => {
              if (e.target.checked) this.props.getByAmenities(e.target.value);
            }}
          />
          Overnight Parking
          <input
            type="checkbox"
            value="Open 24-Hours"
            onChange={(e) => {
              if (e.target.checked) this.props.getByAmenities(e.target.value);
            }}
          />
          Open 24-Hours
        </p>
        <p>
          <h3>Truck Services!</h3>
          <input
            type="checkbox"
            value="NationalTireAccount"
            onChange={(e) => {
              if (e.target.checked) this.props.getByService(e.target.value);
            }}
          />
          National Tire Account
          <input
            type="checkbox"
            value="TirePass"
            onChange={(e) => {
              if (e.target.checked) this.props.getByService(e.target.value);
            }}
          />
          TirePass
          <input
            type="checkbox"
            value="LightMechanical"
            onChange={(e) => {
              if (e.target.checked) this.props.getByService(e.target.value);
            }}
          />
          LightMechanical
        </p>
      </div>
    );
  }
}

export default AdvancedFilter;
