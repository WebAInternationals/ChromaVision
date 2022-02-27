console.log("Content script loaded.");

chrome.runtime.onMessage.addListener(receivedMessage);

// receive message from popup extension
function receivedMessage(message, sender, sendResponse) {
  switch (message.name) {
    case "hueSliderValue":
      console.log("received hue value: " + message.value);
      changeHue(message.value);
      break;
    case "matrixValue":
      console.log("received matrix value: " + message.value);
      changeMatrix(message.value);
      break;
    default:
      break;
  }
}

function changeHue(value) {
  // example value for hue: from 0 - 360
  document.body.style.filter = " url(#changeFilter)";
  document.body.innerHTML += `<svg><filter id="changeFilter"><feColorMatrix type="hueRotate" values="${value}/></filter></svg>"`;
}

function changeMatrix(value) {
  // example value for matrix: 0 0 0 0 0 1 1 1 0 0 1 1 1 0 0 0 0 0 1 0
  document.body.style.filter = " url(#changeFilter)";
  document.body.innerHTML += `<svg><filter id="changeFilter"><feColorMatrix type="matrix" values="${value}/></filter></svg>"`;
}
