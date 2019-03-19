  var width = $(window).width();
	var height = $(window).height();
	var botBarPos = height - 600;
  var tiltAmp = 460;
  // var movingBoxVert = height/2-25;
  // var movingBoxHori = width/2-25;

	$("#contentContain").css("maxWidth", width)
	$("#contentContain").css("maxHeight", height)

	$("#bottomStripe").css("top", botBarPos)

	// $("#movingBox").css("top", movingBoxVert)
	// $("#movingBox").css("left", movingBoxHori)

var backG =   document.querySelector('#background img')
var box 	=   document.querySelector('#movingBox')

//Handles character motion
function handleOrientation(event) {

  var x     = event.beta;
  var y     = event.gamma;

  var imgH  = ($("#movingBox").height());
  var imgV  = ($("#movingBox").width());
  var bV    = ($("body").height());
  var bH    = ($("body").width())

  var beta     = event.beta;
  var gamma    = event.gamma;

  // Rotation constraints
  if (x >  tiltAmp) { x =  tiltAmp};
  if (x < -tiltAmp) { x = -tiltAmp};

  // Range computation
  x += tiltAmp;
  y += tiltAmp;

  // Centering
  box.style.top     = (height*x/tiltAmp - imgH-100) + "px";
  box.style.left    = (width*y/tiltAmp - imgV) + "px";
  backG.style.top   = (height*x/tiltAmp - bV) + "px";
  backG.style.left  = (width*y/tiltAmp - bH) + "px";

}

window.addEventListener("deviceorientation", handleOrientation, true);
