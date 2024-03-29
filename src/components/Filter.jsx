import React, { Component } from "react";
import "../css/Filter.css";

class Filter extends Component {
  render() {
    let highwayData = this.props.locations.map((prop) => prop.data.highway);
    const uniqueHighway = [...new Set(highwayData)].filter(
      (highway) => highway !== "" && highway !== "null"
    );

    let cityData = this.props.locations.map((prop) => prop.data.city);

    const uniqueCity = [...new Set(cityData)].filter(
      (city) => city !== "" && city !== "null"
    );

    // sort alphabetically
    uniqueCity.sort();
    uniqueHighway.sort();
    return (
      <div className="Filter">
        <h4>Search stops by location.</h4>
        <select
          className="select"
          onChange={(e) => this.props.getByState(e.target.value)}
        >
          <option value="default">State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>

        <select
          className="select"
          onChange={(e) => this.props.getByCity(e.target.value)}
        >
          <option value="City">City</option>
          {uniqueCity.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
        <select
          className="select"
          onChange={(e) => this.props.getByHighway(e.target.value)}
        >
          <option value="Highway">Highway</option>
          {uniqueHighway.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Filter;
