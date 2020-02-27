
var interval = {
	"test": "",
	"click": "",
	"deltest": "",
} 
var bool = {
	"bot": false,
	"on": false,
} 
var object = {
	"div": "",
	"button1": "",
}

object.div = document.createElement("DIV");
object.div.style.width = "500px";
object.div.style.height = "50px";
object.div.style.border = "3px solid black";
object.div.id = "div";
object.div.style.background = "gray";

object.button1 = document.createElement("BUTTON");
object.button1.style.width = "100px";
object.button1.style.height = "25px";
object.button1.style.border = "3px solid black";
object.button1.style.background = "white";
object.button1.id = "button1";
object.button1.innerHTML = "Off";
object.button1.setAttribute("onclick", "start()");


document.body.appendChild(object.div);
document.getElementById("div").appendChild(object.button1);


function test() {
	if(bool.bot == true) {
		if(document.Pass) {
			bool.bot = false;
			console.log("Pass element found");
			set("click");
		} else if (document.getElementById("next-btn")) {
			set("stop");
			let x = document.querySelectorAll("#choice-section li");
			console.log("next button");
			x[0].click();
			x[1].click();
			x[2].click();
			document.getElementById("next-btn").click();
			set("test");
		} else {
			console.log("No elements found");
		}
	}
} function set(type) {
	if(type == "click") {//waits time to click
		let rand = Math.floor(Math.random() * (30 - 10)) + 10; 
		
		rand = rand * 1000;
		console.log(rand);
		interval.click = setTimeout(press, rand);
	
	} else if (type == "test") {//starts testing after 1 second
		interval.deltest = setTimeout(function x(){bool.bot = true;}, 1000);
	} else if (type == "stop") { //CLEAR ALL TIMEOUTS AND INTERVALS
		clearTimeout(interval.click);
		clearTimeout(interval.deltest);
		bool.bot = false; 
	}
} function press() {
	document.Pass.click();
	console.log("Clicked");
	set("test");
	
} 


function start() {
	if(bool.on == true) {
		set("stop");
		bool.on = false;
		bool.bot = false;
		set("stop");
		console.log("Bot Inactive");
		document.getElementById("button1").innerHTML = "Off";
	} else if (bool.on == false) {
		bool.on = true;
		bool.bot = true;
		console.log("Bot Active");
		document.getElementById("button1").innerHTML = "On";
	}
}

interval.test = setInterval(test, 1);
