import React, { Component } from "react";

class FilterMatrix extends Component {
  state = {};

  render() {
    return (
      <svg>
        <filter id="changeFilter">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                    1 1 1 0 0
                    1 1 1 0 0
                    0 0 0 1 0"
          />
        </filter>
      </svg>
    );
  }
}

export default FilterMatrix;
