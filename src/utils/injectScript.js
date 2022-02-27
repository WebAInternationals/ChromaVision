async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  console.log(tabs);
  return tabs[0];
}

export default async function injectScript(func, matrix, cvd) {
  const tab = await getTab();
  const tabId = tab.id;
  console.log(tabId);

  if (matrix === undefined || cvd === undefined) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: func,
    });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: func,
      args: [matrix, cvd],
    });
  }
}
