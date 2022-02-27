import React, { Component } from "react";

class ColorBlindSelection extends Component {
  state = {
    colorBlindTypes: [
      "Trichromacy / Normal",
      "Blue Cone Monochromacy / Achromatomaly",
      "Monochromacy / Achromatopsia",
      "Green-Weak / Deuteranomaly",
      "Green-Blind / Deuteranopia",
      "Red-Weak / Protanomaly",
      "Red-Blind / Protanopia",
      "Blue-Weak / Tritanomaly",
      "Blue-Blind / Tritanopia",
    ],
  };

  render() {
    console.log(document.body);
    return this.state.colorBlindTypes.map((type) => (
      <div id="" class="row my-2">
        <div class="col-8">
          <label>{type}</label>
        </div>
        <div class="col-4">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    ));
  }
}

export default ColorBlindSelection;
