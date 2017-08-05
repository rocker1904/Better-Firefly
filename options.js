var defaultBackground = 1;

function loadOptions() {
	var backgroundChoice = localStorage["backgroundChoice"];

	if (backgroundChoice == undefined || (backgroundChoice != 1 && backgroundChoice != 2)) {
		backgroundChoice = defaultBackground;
	}

	var select = document.getElementById("backgroundChoiceID");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == backgroundChoice) {
			child.selected = "true";
			break;
		    }
	}
}

function saveOptions() {
	var select = document.getElementById("backgroundChoiceID");
	var backgroundChoiceSave = select.children[select.selectedIndex].value;
	localStorage["backgroundChoice"] = backgroundChoiceSave;
}

function eraseOptions() {
	localStorage.removeItem("backgroundChoice");
	location.reload();
}