	var width = $(window).width();
	var height = $(window).height();
	var botBarPos = height - 300;
	var movingBoxVert = height/2-25;
	var movingBoxHori = width/2-25;

	// alert(width + ", " + height)

	$("#contentContain").css("maxWidth", width)
	$("#contentContain").css("maxHeight", height)

	$("#bottomStripe").css("top", botBarPos)

	$("#movingBox").css("top", movingBoxVert)
	$("#movingBox").css("left", movingBoxHori)

var backG =   document.querySelector('#background')
var box 	=   document.querySelector('#movingBox')

// var maxX =    garden.clientWidth  - ball.clientWidth;
// var maxY =    garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {

  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  var beta     = event.beta;
  var gamma    = event.gamma;

  // output.innerHTML  = "beta : " + x + "\n";
  // output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  15) { x =  15};
  if (x < -15) { x = -15};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 15;
  y += 15;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  box.style.top  = (width/2 - 25) + "px";
  box.style.left = (height/2 - 25) + "px";

}

window.addEventListener("deviceorientation", handleOrientation, true);
