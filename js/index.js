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
var d, h, m, s;
function displayTime() {
	d = new Date(); //new data object
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	session = "AM";
	
	//defines PM
	if (h == 0) {
		h =12;
	}
	if (h > 12) {
		h = h - 12;
		session = "PM"
	}
	
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	//set time
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("hex").innerText = time;
	document.getElementById("hex").textContent = time;
	
	//retrigger the function every second
	setTimeout(displayTime, 1000);
}

//call the function
displayTime();

// END OF ALARM CLOCK //
///////////////////////////////////////////////////////////////////////////
