import React, { Component } from "react";
import "./App.css";
import Map from "./containers/Map";
import Filter from "./containers/Filter";
import Navbar from "./containers/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar id="Navbar" />
        <Filter id="Filter" />
        <Map id="map" />
      </div>
    );
  }
}

export default App;
