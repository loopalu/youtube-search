// Create the context menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "youtube-search",
    title: 'Search in YouTube',
    contexts: ["selection"],
    icons: {
      "16": "icons/icon16.png"
    }
  });
});

// Handle click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "youtube-search" && info.selectionText) {
    const quotedSearchPhrase = `"${info.selectionText.trim()}"`;
    const queryUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(quotedSearchPhrase)}`;
    chrome.tabs.create({ url: queryUrl });
  }
});
