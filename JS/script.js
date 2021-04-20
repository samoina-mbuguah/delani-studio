$(document).ready(function() {
$(".bg-image").hover(function() {
  $(".bg-image").addClass("top-section");
});

$("#designImage").click(function() {
  $("#design").toggle();
}); 

$("#devImage").click(function() {
  $("#development").toggle();
});

$("#productImage").click(function() {
  $("#product").toggle();
});

$("#blackie-text").hide();
$("#blackie").animate({
  opacity:1
});

$("#blackie").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#blackie-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#blackie-text").fadeOut();
});

$("#ontario-text").hide();
$("#ontario").animate({
  opacity:1
});

$("#ontario").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#ontario-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#ontario-text").fadeOut();
});

$("#orange-text").hide();
$("#orange").animate({
  opacity:1
});

$("#orange").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#orange-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#orange-text").fadeOut();
});

$("#jim-carrey-text").hide();
$("#jim-carrey").animate({
  opacity:1
});

$("#jim-carrey").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#jim-carrey-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#jim-carrey-text").fadeOut();
});

$("#elena-text").hide();
$("#elena").animate({
  opacity:1
});

$("#elena").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#elena-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#elena-text").fadeOut();
});

$("#wordpress-text").hide();
$("#wordpress").animate({
  opacity:1
});

$("#wordpress").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#wordpress-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#wordpress-text").fadeOut();
});

$("#burned-logo-text").hide();
$("#burned-logo").animate({
  opacity:1
});

$("#burned-logo").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#burned-logo-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#burned-logo-text").fadeOut();
});

$("#giraffe-text").hide();
$("#giraffe").animate({
  opacity:1
});

$("#giraffe").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $("#giraffe-text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $("#giraffe-text").fadeOut();
});

// Tried using the array method and forEach so that every time someone hovers over an image it chooses the text from the second array and displays it, but I can't seem to wrap my mind around it :(

//This was an array for images i have given ids, and next array texts to be displayed.

//  let portfolioImages= ["#blackie", "#mightyOntario", "#orangePark", "#jimCarrey", "#elena", "#wordpress", "#burnedLogo", "#giraffe"];
  
//   let texts=["Blackie Project", "Mighty Ontario Project", "Orange Park Project", "Jim Carrey Project", "Elena Project", "Wordpress Project", "Burned Logo Project", "Giraffe Project"];
  
//   portfolioImages.forEach(function(portfolioImage) {
//     $("portfolioImage").hover(function() {
//       $("portfolioImage").stop().animate({opacity:0.4},200);
//       $("texts").fadeIn();
//     }, function() {
//       $("portfolioImage").stop().animate({opacity:1},500)
//       $("texts").fadeOut();
//   });
  
//   });

});
