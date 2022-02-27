var buttonSelected = false;
var filterStateID = [
  "Trichromacy / Normal",
  "Blue Cone Monochromacy / Achromatomaly",
  "Monochromacy / Achromatopsia",
  "Green-Weak / Deuteranomaly",
  "Green-Blind / Deuteranopia",
  "Red-Weak / Protanomaly",
  "Red-Blind / Protanopia",
  "Blue-Weak / Tritanomaly",
  "Blue-Blind / Tritanopia",
    // include our own here
  "Special Filter 1",
  "Special Filter 2"
];

var eventSelected = "";

function openForm() {
  document.getElementById("popup").style.display = "block";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

function listenFilterOptions() {
  for (let i = 0; i < filterStateID.length; i++) {
    document.getElementById(filterStateID.at(i)).onchange = function () {
      if (!buttonSelected) {
        eventSelected = filterStateID.at(i);
        disableOptions();
        buttonSelected = true;
      } else if (buttonSelected && filterStateID.at(i) == eventSelected) {
        enableOptions();
        buttonSelected = false;
        eventSelected = "";
      }
      console.log(buttonSelected);
    };
  }
}

function disableOptions() {
  for (let i = 0; i < filterStateID.length; i++) {
    if (filterStateID.at(i) != eventSelected) {
      document.getElementById(filterStateID.at(i)).disabled = true;
    }
  }
}

function enableOptions() {
  eventSelected = "";
  for (let i = 0; i < filterStateID.length; i++) {
    document.getElementById(filterStateID.at(i)).disabled = false;
  }
}

document.getElementById("open-button").addEventListener("click", openForm);
document.getElementById("close-button").addEventListener("click", closeForm);
document
  .getElementById("ColorBlindSelection")
  .addEventListener("click", listenFilterOptions);
