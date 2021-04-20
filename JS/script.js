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

$(".text").hide();
$(".image").animate({
  opacity:1
});

$(".image").hover(function() {
  $(this).stop().animate({opacity:0.4},200);
  $(".text").fadeIn();
}, function() {
  $(this).stop().animate({opacity:1},500)
  $(".text").fadeOut();
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
