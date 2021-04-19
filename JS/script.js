$(document).ready(function() {
$(".bg-image").hover(function() {
  $(".bg-image").addClass("top-section");
});

$("#designImage").click(function() {
  $("#design").toggle();
  $("#designImage").toggle();
});

$("#devImage").click(function() {
  $("#development").toggle();
  $("#devImage").toggle();
});

$("#productImage").click(function() {
  $("#product").toggle();
  $("#productImage").toggle();
});

});