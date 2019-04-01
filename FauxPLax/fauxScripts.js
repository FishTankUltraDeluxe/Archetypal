// Attempt 2

var scene = $('.bodyContain').get(0);
var parallaxInstance = new Parallax(scene);

//Attempt 1, commented for storage in case new solution does not work

// Get width and height of device window, and height of text container
  var windowWidth     = $(window).width();
  var windowHeight    = $(window).height();
  var textBoxHeight   = $(".textContainer").height();
  var boxOffset       = windowHeight - textBoxHeight;
  
// Force container to bottom and adopt width of screen
  $(".textContainer").css("marginTop", boxOffset*7.75);
  $(".textContainer").css("maxWidth", windowWidth);
 
  // log to console dimensions  
  console.log("Width of window: " + windowWidth);
  console.log("Height of window: " + windowHeight);
  console.log("Text box height: " + textBoxHeight);
  console.log("Text box is offset by: " + boxOffset);


  // Old swipe code

  // When swiping right, execute "NextCharacter" function
  // $(window).on("swiperight", function(){
  //   console.log("Swipe!")
  //   $("#bodyContain").css("background", "#000000")
  // });

  // Old parallax code

  // var tiltAmp = 460;


  // $("#textContainer").css("maxHeight", height)


// var backG =   document.querySelector('#bgImage')
// var box 	=   document.querySelector('#character')

// //Handles character motion
// function handleOrientation(event) {

//   var x     = event.beta;
//   var y     = event.gamma;

//   var imgH  = ($("#character").height());
//   var imgV  = ($("#character").width());
//   var bV    = ($("body").height());
//   var bH    = ($("body").width())

//   var beta     = event.beta;
//   var gamma    = event.gamma;

//   // Rotation constraints
//   if (x >  tiltAmp) { x =  tiltAmp};
//   if (x < -tiltAmp) { x = -tiltAmp};

//   // Range computation
//   x += tiltAmp;
//   y += tiltAmp;

//   // Centering
//   box.style.top     = (height*x/tiltAmp - imgH) + "px";
//   box.style.left    = (width*y/tiltAmp - imgV) + "px";
//   backG.style.top   = (height*x/(tiltAmp*100) - bV) + "px";
//   backG.style.left  = (width*y/(tiltAmp*100) - bH) + "px";

// }

// window.addEventListener("deviceorientation", handleOrientation, true);