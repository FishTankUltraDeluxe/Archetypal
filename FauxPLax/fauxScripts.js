	var width = $(window).width();
	var height = $(window).height();
	var botBarPos = height - 600;
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
  var y = event.gamma; // In degree in the range [-10,10]
  var imgH = ($("#movingBox").height())
  var imgV = ($("#movingBox").width())

  var beta     = event.beta;
  var gamma    = event.gamma;

  // output.innerHTML  = "beta : " + x + "\n";
  // output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-10,10]
  if (x >  10) { x =  10};
  if (x < -10) { x = -10};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 10;
  y += 10;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  box.style.top  = (height*x/10 - imgH) + "px";
  box.style.left = (width*y/10 - imgV) + "px";

}

window.addEventListener("deviceorientation", handleOrientation, true);
