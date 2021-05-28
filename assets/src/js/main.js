// Open and close logo slider with click action
const open = document.getElementById("bookimeOpen");
const sidebar = document.getElementById("bookimeSidebar");

let active = false;
open.addEventListener("click", function() {
	if (!active) {
		sidebar.classList.add("bookime__card--active");
		active = true;
	} else {
		sidebar.classList.remove("bookime__card--active");
		active = false;
	}
});