chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.getSelected(null, function(tab){
		chrome.windows.create({tabId: tab.id}, function(){});
	});
});