import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <div id="Location">
          <h5>Locations:</h5>
          <select id="locations">
            <option value="volvo">State</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <select>
            <option value="volvo">City</option>
          </select>

          <select>
            <option value="volvo">Highway</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;