var level = document.getElementsByClassName("mode")[0];
var level2 = document.getElementsByClassName("mode selected")[0];
var boxes = document.getElementsByClassName("square");
var button = document.getElementById("reset");
var cdisplay = document.getElementById("colorDisplay");
// randomizer
function newColors() {
	
	var r = Math.random()*256;
		r = Math.floor(r);
	var g = Math.random()*256;
		g = Math.floor(g);
	var b = Math.random()*256;
		b = Math.floor(b);

	return "rgb(" + r + "," + g + "," + b + ")";
	}

// var colors = document.getElementById("square");

// activating easy level button
// var level.addEventListener("click", function() {
	// console.log("You clicked the easy button");
// });

// activating hard level button
level2.addEventListener("click", function() {
	for (var i = 0; i < level2.length; i++) {
		level2[i]
	}
	console.log("You clicked the hard button");
});

// activating new colors button 
button.addEventListener("click", function() {
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.background = cdisplay.textContent = newColors();
	}
	

	console.log("You clicked New Colors");
			
});

// activating color squares
for (var i = 0; i < boxes.length; i++) {
	boxes[i].style.background = newColors();
	
}

// activating color display

cdisplay.textContent = newColors();

// activating color squares





	

