var check;
var x;
var time = 5000;
var stop;
var pass = true;
var active = false;
var notif = true;
var div = document.createElement("DIV");
div.id = "main";
div.style.height = "50px";
div.style.width = "500px";
div.style.margin = "0px auto 0px auto";
div.style.border = "3px solid black";
div.style.background = "gray";
div.style.color = "black";
document.body.appendChild(div);
var toggle = document.createElement("BUTTON");
toggle.id = "toggle";
toggle.setAttribute('onclick', "start()");
//toggle.style.width = "50px";
toggle.style.height = "25px";
toggle.style.border = "3px solid black";
toggle.style.margin = "auto";
toggle.innerHTML = "Bot: Off";
toggle.style.background = "white";
document.getElementById("main").appendChild(toggle);
var skip = document.createElement("BUTTON");
skip.id = "skip";
skip.setAttribute("onclick", "nope()");
//skip.style.width = "50px";
skip.style.height = "25px";
skip.style.border = "3px solid black";
skip.style.margin = "auto";
skip.innerHTML = "Skip new words: On";
skip.style.background = "white";
document.getElementById("main").appendChild(skip);
var alert = document.createElement("BUTTON");
alert.id = "al";
alert.setAttribute("onclick", "notify()");
//skip.style.width = "50px";
alert.style.height = "25px";
alert.style.border = "3px solid black";
alert.style.margin = "auto";
alert.innerHTML = "Alert new words: On";
alert.style.background = "white";
document.getElementById("main").appendChild(alert);
function start() {
	if(active == false) {
		document.getElementById("toggle").innerHTML = "Bot: On";
		set("norm");
		active = true;
	} else if (active == true) {
		document.getElementById("toggle").innerHTML = "Bot: Off";
		set("stop");
		active = false
	}
}

function test() {
	if(document.Pass) {
		set("clear");
		console.log("Pass element exists, clicking");
		set("click");
	} else if (document.getElementById("next-btn")) {
		if(pass == true) {
			set("clear");
		x = document.querySelectorAll("#choice-section li");
		console.log("Next button");
		x[0].click();
		x[1].click();
		x[2].click();
		document.getElementById("next-btn").click();
		set("delay");
		} else {
			/*if(alert == true) {
			
			}*/
		}
		
	} else if (document.getElementById("answer-bot")) {//move this before pass element
		click();
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
		let rand = Math.floor(Math.random() * 31) + 1; //something is wrong with this--------------------
		rand = rand * 1000;
		console.log(rand);
		setTimeout(click, rand);
	} else if (type == "stop") {
		stop = setInterval(stop, 1);
	}
} function stop() {
	set("clear");
} function nope() {
	if(pass == true) {
		document.getElementById("skip").innerHTML = "Skip new words: Off";
		pass = false;
		console.log("No longer skipping new words");
	} else if (pass == false) {
		document.getElementById("skip").innerHTML = "Skip new words: On";
		pass = true;
		console.log("Skipping new words");
	}
} function notify() {
	if(notif == true) {
		document.getElementById("al").innerHTML = "Alert new words: Off";
		notif = false;
		console.log("Nofifications are inactive");
	} else if(notif == false) {
		document.getElementById("al").innerHTML = "Alert new words: On";
		notif = true;
		console.log("Nofifications are active");
	}
}


