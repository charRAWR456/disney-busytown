$(document).ready(function() {
  $(".elephant").click(function() {
    $(".sally").slideToggle();
    $(".elephantDesc").slideToggle();
  });

  $(".mrhops").click(function() {
    $(".bunny").slideToggle();
    $(".mrhopsDesc").slideToggle();
  });

  $(".turtle").click(function() {
    $(".turtleimage").slideToggle();
    $(".turtleDesc").slideToggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
