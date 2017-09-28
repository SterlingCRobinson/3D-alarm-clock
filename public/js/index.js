//////////////////////////////////////////////////////////////////////////
// 3D CUBE //
//////////////////////////////////////////////////////////////////////////

var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;
$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;

        case 38: // up
            xAngle += 90;
            evt.preventDefault();
            break;

        case 39: // right
            yAngle += 90;
            break;

        case 40: // down
            xAngle -= 90;
            evt.preventDefault();
            break;
    };
    document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
})

// END OF 3D CUBE //
///////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////
// ALARM CLOCK //
///////////////////////////////////////////////////////////////////////////

//lets display the current time
function displayTime() {
	var date = new Date(); //new data object
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var session;

	if (
		!alarmTriggered &&
		alarmTime != undefined &&
		parseInt(hours) == alarmTime.hours &&
		parseInt(minutes) == alarmTime.minutes
	){
		alarmTriggered = true;
		var audio = document.getElementById("myAudio");
		audio.play();
		document.getElementById("stop").classList.remove('hidden');
		document.getElementById("gif").classList.remove('hidden');
	}
	
	if (hours == 0) {
		hours =12;
	}
	if (hours > 12) {
		hours = hours - 12;
	  session = "PM"; // defines  if it's PM
	} else {
		session = "AM"; // defines if it's AM
	}
	
	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes< 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	//set time
	var time = hours + ":" + minutes + ":" + seconds + " " + session;
	document.getElementById("hex").innerText = time;
	document.getElementById("hex").textContent = time;
	
	//retrigger the function every second
	setTimeout(displayTime, 1000);
}

//call the function
displayTime();
// END OF TIME DISPLAY //
///////////////////////////////////////////////////////////////////////////

var alarmTime = undefined;
var alarmTriggered = false;

function setAlarm1(event) {
	event.preventDefault();
	var hours = parseInt(document.getElementById("hours").value);
	var minutes = parseInt(document.getElementById("minutes").value);
	var period = document.getElementById("period").value;
	hours = (hours < 10) ? 0 + hours : hours;
	minutes = (minutes< 10) ? 0 + minutes : minutes;

	document.getElementById("set").innerHTML = hours + ":" + minutes + " " + period;
	if (period == "PM"){
		hours = hours+12;
	};
	alarmTime = {
		'hours': hours,
		'minutes': minutes
	};
}

var audio = document.getElementById("myAudio");
audio.pause();

// function setAlarm2(event) {
// 	event.preventDefault();
// 	var hours = parseInt(document.getElementById("hours2").value);
// 	var minutes = parseInt(document.getElementById("minutes2").value);
// 	var period = document.getElementById("period2").value;
// 	hours = (hours < 10) ? "0" + hours : hours;
// 	minutes = (minutes< 10) ? "0" + minutes : minutes;

// 	document.getElementById("set2").innerHTML = hours + ":" + minutes + " " + period;
// 	if (period == "PM"){
// 		hours = hours+12;
// 	};
// 	alarmTime = {
// 		'hours': hours,
// 		'minutes': minutes
// 	};
// }

// var audio = document.getElementById("myAudio");
// audio.pause();

// function setAlarm3(event) {
// 	event.preventDefault();
// 	var hours = parseInt(document.getElementById("hours3").value);
// 	var minutes = parseInt(document.getElementById("minutes3").value);
// 	var period = document.getElementById("period3").value;
// 	hours = (hours < 10) ? "0" + hours : hours;
// 	minutes = (minutes< 10) ? "0" + minutes : minutes;

// 	document.getElementById("set3").innerHTML = hours + ":" + minutes + " " + period;
// 	if (period == "PM"){
// 		hours = hours+12;
// 	};
// 	alarmTime = {
// 		'hours': hours,
// 		'minutes': minutes
// 	};
// }

// var audio = document.getElementById("myAudio");
// audio.pause();





