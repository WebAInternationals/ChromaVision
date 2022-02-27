// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    let openingTags = '<svg><filter id="changeFilter"><feColorMatrix type="';
    let type = 'matrix"';
    let values = 'values="0 0 0 0 0 1 1 1 0 0 1 1 1 0 0 0 0 0 1 0"';
    // type="hueRotate" values="180"
    let closingTags = "></feColorMatrix></filter></svg>";
    // document.body.style.backgroundColor = color;
    document.body.style.filter = " url(#changeFilter)";
    document.body.innerHTML += openingTags + type + values + closingTags;
  });
}
