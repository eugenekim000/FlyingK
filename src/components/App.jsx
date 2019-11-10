import React, { Component } from "react";
import "../css/App.css";
import "../css/SearchResults.css";
import Map from "../containers/Map";
import Filter from "../containers/Filter";
import Navbar from "../containers/Navbar";
import AdvancedFilter from "../containers/AdvancedFilter";
import SearchResults from "../containers/SearchResults";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchActive: true,
      advancedFilter: true,
    };
  }

  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar id="Navbar" />
        <Filter id="Filter" />
        <AdvancedFilter id="AdvancedFilter" />
        <Map id="map" />
        {this.state.searchActive && <SearchResults />}
      </div>
    );
  }
}

export default App;
