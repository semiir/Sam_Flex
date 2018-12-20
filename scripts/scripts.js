var boxes = $(".boxes");
var positions = [0,-800,-1600,-2400,-3200,-4000];
var currentPosition = 0;

$(".btn-next").on("click", function() {
  if (currentPosition < positions.length - 1) {
    currentPosition++;
  } else {
    currentPosition = 0;
  }
  boxes.animate({
      left: positions[currentPosition]
    }, 500);
});

$(".btn-prev").on("click", function() {
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = positions.length - 1;
  }
  boxes.animate({
      left: positions[currentPosition]
    }, 800);
});