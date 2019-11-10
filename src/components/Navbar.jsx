import React, { Component } from "react";
import logo from "../assets/truckstop-logo.png";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRedo } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  onHomeButtonClick() {
    window.location.href = "/";
  }

  render() {
    return (
      <div className="Navbar">
        <div onClick={this.onHomeButtonClick} className="home-button button">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <img src={logo} className="App-logo" alt="" />
        <div
          className="get-all-locations-button button"
          onClick={() => {
            this.props.getLocations();
          }}
        >
          <FontAwesomeIcon icon={faRedo} />
        </div>
      </div>
    );
  }
}

export default Navbar;
