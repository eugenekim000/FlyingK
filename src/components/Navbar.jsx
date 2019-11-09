import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h1>NAVBAR!!</h1>
        {/* <p>data</p> */}
        <button
          onClick={() => {
            this.props.getLocations();
          }}
        >
          Get all Locations
        </button>

        <form action="http://localhost:3000/">
          <input type="submit" value="Go Home!" />
        </form>
      </div>
    );
  }
}

export default Navbar;
