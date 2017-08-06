var background_option = 1
chrome.storage.sync.get({
		background: background_option
	}, function(items) {
		var background1 = "body.background-cover{background:#62b8ed url('https://emberspark.xyz/background1.jpg') fixed top center !important}";
		var background2 = "body.background-cover{background:#62b8ed url('https://emberspark.xyz/background2.jpg') fixed top center !important}";
		var backgroundBroken = "body.background-cover{background:#62b8ed url('https://emberspark.xyz/backgroundBroken.jpg') fixed top center !important}";
		
		if (items.background == 1){
			var background = background1;
		}
		else if (items.background == 2){
			var background = background2;
		}
		else {
			var backgroud = backgroundBroken;
		}
		
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = background;
		document.body.appendChild(css);
	}
)