import React, { Component } from "react";

class ColorBlindSelection extends Component {
  state = {
    colorFilterID: [
      "option-normal",
      "option-achromatomaly",
      "option-achromatopsia",
      "option-deuteranomaly",
      "option-deuteranopia",
      "option-protanomaly",
      "option-protanopia",
      "option-tritanomaly",
      "option-tritanopia",
    ],
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
    return this.state.colorBlindTypes.map((type, i) => (
      <div id={this.state.colorFilterID.at(i)} class="row my-2">
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
