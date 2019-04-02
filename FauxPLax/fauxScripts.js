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
  var tableWidth      = $("#thisIsTable")
  
  $(".textContainer").css("marginTop", boxOffset);
  $("body").css("maxHeight", windowHeight);
  // $(".textContainer").css("maxWidth", windowWidth);