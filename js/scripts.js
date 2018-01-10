$(document).ready(function() {
  $(".elephant").click(function() {
    $(".sally").toggle();
    $(".elephantDesc").toggle();
  });

  $(".mrhops").click(function() {
    $(".bunny").toggle();
    $(".mrhopsDesc").toggle();
  });

  $(".turtle").click(function() {
    $(".turtleimage").toggle();
    $(".turtleDesc").toggle();
  });
});
