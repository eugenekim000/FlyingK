import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Map from "./containers/Map";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import locations from "../truckStopData";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>data</p>
        </div>
        <p className="App-intro" />
        <Navbar id="Navbar" />;<Filter id="Filter" />
        <Map id="map" />
      </div>
    );
  }
}

export default App;
