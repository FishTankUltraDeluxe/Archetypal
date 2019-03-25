  var width = $(window).width();
	var height = $(window).height();
  var tiltAmp = 460;

	$("#contentContain").css("maxWidth", width)
	$("#contentContain").css("maxHeight", height)
  console.log("Width of window: " + width)
  console.log("Height of window: " + height)

var backG =   document.querySelector('#bgImage')
var box 	=   document.querySelector('#character')

//Handles character motion
function handleOrientation(event) {

  var x     = event.beta;
  var y     = event.gamma;

  var imgH  = ($("#character").height());
  var imgV  = ($("#character").width());
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
  box.style.top     = (height*x/tiltAmp - imgH) + "px";
  box.style.left    = (width*y/tiltAmp - imgV+50) + "px";
  backG.style.top   = (height*x/(tiltAmp*5) - bV) + "px";
  backG.style.left  = (width*y/(tiltAmp*5) - bH) + "px";

}

window.addEventListener("deviceorientation", handleOrientation, true);
