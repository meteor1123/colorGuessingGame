var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(255, 100, 0)",
	"rgb(255, 0, 100)",
	"rgb(255, 100, 100)"
]
var squares = document.querySelectorAll(".square");
var target = document.querySelector("#target");
target = colors[3];

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	// add Event Listener "Click"
	squares[i].addEventListener("click", function() {
	// compare picked color to target color
	var pickedColor = this.style.backgroundColor;
		if (pickedColor === target) {
			alert("correct");
		} else {
			alert("wrong");
		}
	});
}