var menuItem = {
    "id": "eksiSozlukSearch",
    "title": "Ekşi Sözlük'te Ara",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
    var eksiSozlukUrl = "https://eksisozluk.com/" + clickData.selectionText;
    chrome.tabs.create({ "url": eksiSozlukUrl });
});