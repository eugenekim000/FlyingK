import React, { Component } from "react";
import logo from "../truckstop-logo.png";
import "../Navbar.css";

class Navbar extends Component {
  onHomeButtonClick() {
    window.location.href = "/";
  }

  render() {
    return (
      <div className="Navbar">
        {/* <p>data</p> */}
        <div onClick={this.onHomeButtonClick} className="home-button button">
          HOME
        </div>
        <img src={logo} className="App-logo" alt="" />
        <div
          className="get-all-locations-button button"
          onClick={() => {
            this.props.getLocations();
          }}
        >
          SHOW ALL LOCATIONS{" "}
        </div>
      </div>
    );
  }
}

export default Navbar;
