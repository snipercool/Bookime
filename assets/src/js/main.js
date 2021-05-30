// Open and close logo slider with click action
const open = document.getElementById("bookimeOpen");
const sidebar = document.getElementById("bookimeSidebar");

let active = false;
open.addEventListener("click", function() {
	if (!active) sidebar.classList.add("bookime__card--active");
	else sidebar.classList.remove("bookime__card--active");
	active = !active;
});

const eventMethod = window.addEventListener
	? "addEventListener"
	: "attachEvent";
const eventer = window[eventMethod];
const messageEvent = eventMethod === "attachEvent"
	? "onmessage"
	: "message";

eventer(messageEvent, function (e) {
	
	if (e.data === "close" || e.message === "close") {
		sidebar.classList.remove("bookime__card--active");
		active = false;
	}
	
	if (e.data === "light" || e.message === "light") {
		sidebar.classList.remove("dark");
		sidebar.classList.add("light");
	}

	if (e.data === "dark" || e.message === "dark") {
		sidebar.classList.remove("light");
		sidebar.classList.add("dark");
	}
});