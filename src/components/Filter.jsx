import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <button
          onClick={() => {
            let data = this.props.locations.map((prop) => prop.data.highway);
            const unique = [...new Set(data)].filter(
              (highway) => highway !== "null"
            );
            console.log(unique);
          }}
        >
          filter button test
        </button>

        <div id="Location">
          <h5>Locations:</h5>
          <select id="locations">
            <option value="volvo">State</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <select>
            <option value="City">City</option>
          </select>

          <select>
            <option value="Highway">Highway</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
