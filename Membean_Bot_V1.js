//Use function always running to set pass button to visible document.getElementById("pass__event").type = "visible";, and when it works use another function

var check;
var x;
function test() {
	if(document.Pass) {
		set("clear");
		console.log("Pass element exists, clicking");
		set("click");
	} else if (document.getElementById("next-btn")) {
		set("clear");
		x = document.querySelectorAll("#choice-section li");
		console.log("Next button");
		x[0].click();
		x[1].click();
		x[2].click();
		document.getElementById("next-btn").click();
		set("delay");
	} else {
		console.log("No recognized elements");
	}
} function click() {
console.log("clicked");
	document.Pass.click();
	set("delay");
} set("norm");

function set(type) {
	if(type == "norm") {
	check = setInterval(test, 1);
	} else if(type == "delay") {
		setTimeout(function del() {check = setInterval(test, 1);}, 1000);
	} else if(type == "clear") {
		clearInterval(check);
	} else if(type == "click") {
		setTimeout(click, 5000);
	}
}	