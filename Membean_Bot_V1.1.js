//Membean Bot Version 1.1 by FinishedManx843
//Download new versions on github.com/FinishedManx843/Membean_Bot
var check;
var x;
var time = 5000;
var stop;

var toggle = document.createElement("BUTTON");
toggle.id = "toggle";
toggle.setAttribute('onclick', "start()");
toggle.style.width = "50px";
toggle.style.height = "25px";
toggle.style.border = "3px solid black";
toggle.style.margin = "auto";
toggle.innerHTML = "Off";
toggle.style.background = "white";
document.body.appendChild(toggle);

function start() {
	if(document.getElementById("toggle").innerHTML == "Off") {
		document.getElementById("toggle").innerHTML = "On";
		set("norm");
	} else if (document.getElementById("toggle").innerHTML == "On") {
		document.getElementById("toggle").innerHTML = "Off";
		set("stop");
	}
}

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
} 

function set(type) {
	if(type == "norm") {
	clearInterval(stop);
	check = setInterval(test, 1);
	} else if(type == "delay") {
		setTimeout(function del() {check = setInterval(test, 1);}, 1000);
	} else if(type == "clear") {
		clearInterval(check);
	} else if(type == "click") {
		setTimeout(click, time);
	} else if (type == "stop") {
		stop = setInterval(stop, 1);
	}
} function stop() {
	set("clear");
}


