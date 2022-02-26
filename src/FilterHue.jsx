import React, { Component } from "react";

class FilterHue extends Component {
  state = {};
  render() {
    return (
      <svg>
        <filter id="changeHue">
          <feColorMatrix in="SourceGraphic" type="hueRotate" values="180" />
        </filter>
      </svg>
    );
  }
}

export default FilterHue;
