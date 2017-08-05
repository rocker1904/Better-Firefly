var backgroundInput = localStorage["backgroundChoice"]
var background1 = "body.background-cover{background:#62b8ed url('https://emberspark.xyz/background1.jpg') fixed top center !important}"
var background2 = "body.background-cover{background:#62b8ed url('https://emberspark.xyz/background2.jpg') fixed top center !important}"
var backgroundBroken = "body.background-cover{background:#62b8ed url('https://emberspark.xyz/backgroundBroken.jpg') fixed top center !important}"

if (backgroundInput == 1){
	var background = background1
}
else if (backgroundInput == 2){
	var background = background2
}
else {
	var background = backgroundBroken
}

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = background;
document.body.appendChild(css);