let slider = document.getElementById("hueSlider");
slider.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log("tabid: " + tab.id);
  sendSliderValue(tab.id);
});

// sends message to content script
function sendSliderValue(tabId) {
  let message = {
    name: "hueSliderValue",
    value: slider.value,
  };
  console.log("value: " + slider.value);
  chrome.tabs.sendMessage(tabId, message);
}

// let button = document.getElementById("");
// button.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log("tabid: " + tab.id);
//   sendMatrixValue(tab.id);
// });

// sends message to content script
function sendMatrixValue(tabId) {
  let message = {
    name: "matrixValue",
    value: "0 0 0 0 0 1 1 1 0 0 1 1 1 0 0 0 0 0 1 0",
  };
  console.log("matrix value: " + message.value);
  chrome.tabs.sendMessage(tabId, message);
}
