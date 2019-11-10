import React, { Component } from "react";
import "../AdvancedFilter.css";

class AdvancedFilter extends Component {
  render() {
    return (
      <div className="advanced-filter">
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
        </p>
      </div>
    );
  }
}

export default AdvancedFilter;
