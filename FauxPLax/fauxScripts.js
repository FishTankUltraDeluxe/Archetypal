// Set up parallax for each table element
var i;

for (i = 0; i < 13; ++i) {
  var scene = $('.bodyContain').get(i);
  var parallaxInstance = new Parallax(scene);
}


// Get width and height of device window, and height of text container
  var windowWidth     = $(window).width();
  var windowHeight    = $(window).height();
  var boxOffset       = windowHeight - 420 - 180;
  
// Force container to bottom and adopt width of screen
  $(".textContainer").css("marginTop", boxOffset);
  $(".textContainer").css("maxWidth", windowWidth);