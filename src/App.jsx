import React, { Component } from "react";

import "./App.css";
import Map from "./containers/Map";
import Filter from "./containers/Filter";
import Navbar from "./containers/Navbar";
// import locations from "./data/truckStopData";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <p className="App-intro" />
        <Navbar id="Navbar" />
        <Filter id="Filter" />
        <Map id="map" />
      </div>
    );
  }
}

export default App;
