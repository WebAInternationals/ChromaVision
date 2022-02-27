import React, { Component } from "react";

class ColorBlindSelection extends Component {
  filterGroupType = {
    convertToColorBlindView: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    convertToColorBlindFriendlyView: [9, 10]
  }

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
      "option-special-1",
      "option-special-2",
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
        // insert our own filters here (must be same name is those in popup.js)
      "Special Filter 1",
        "Special Filter 2"
    ],
  };

  render() {
    return (
        <div>
          <h3>convert to colorblind view</h3>
          {
            this.state.colorBlindTypes.map((type, i) => {
              if (this.filterGroupType.convertToColorBlindView.includes(i)) {
                return (
                    <div>
                      <div id={this.state.colorFilterID.at(i)} className="row my-2">
                        <div className="col-8">
                          <label>{type}</label>
                        </div>
                        <div div className="col-1">
                          <label className="switch">
                            <input type="checkbox" id={type}/>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                )
              }
            })
          }

          <h3>convert to colorblind-friendly view</h3>
          {
            this.state.colorBlindTypes.map((type, i) => {
              if (this.filterGroupType.convertToColorBlindFriendlyView.includes(i)) {
                return (
                    <div>
                      <div id={this.state.colorFilterID.at(i)} className="row my-2">
                        <div className="col-8">
                          <label>{type}</label>
                        </div>
                        <div div className="col-1">
                          <label className="switch">
                            <input type="checkbox" id={type}/>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                )
              }
            })
          }
        </div>
        )
  }
}

export default ColorBlindSelection;
