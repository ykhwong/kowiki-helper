// Avoid recursive frame insertion...
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
	var iframe = document.createElement('iframe');
	var urlData={};
	urlData.pageURL = window.location.href;
	iframe.src = chrome.runtime.getURL('frame.html');
	iframe.style.cssText = 'position:fixed;top:0;height:100%;right:0;display:block;' +
						   'width:300px;z-index:1000;';

	$(document).ready(function(){
		var con = $( 'html' ).html().toString();
		var re = new RegExp('li class="interlanguage-link .+en\\.wikipedia\\.org\\/wiki\\/(\\S+)');
		if (re.exec(con)) {
			var results = con.match(re);
			urlData.enTitle = results[1].replace(/"/, '');
		}

		document.body.appendChild(iframe);

		window.onmessage = function(e){
			iframe.contentWindow.postMessage({
				'urlData': JSON.stringify(urlData)
			}, '*');
		};
	});
}
