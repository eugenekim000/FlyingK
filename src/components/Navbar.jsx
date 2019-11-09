import React, { Component } from "react";
import { getMarkers } from "../utils";
import data from "../data/truckStopData";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h1>NAVBAR!!</h1>
        {/* <p>data</p> */}
        <button onClick={getMarkers}>GO Home</button>
      </div>
    );
  }
}

export default Navbar;
