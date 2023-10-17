// Manipulating styles with jQuery\

// $("h1").css("color","yellowgreen");

// $("h1").addClass("big-title")
// $("h1").removeClass("big-title")

// Manipulating html or text with jQuery
$("h1").text("Hey");
$("button").text("Don't Click Me");
$("button").html("<em>Click Me</em>");

// Manipulating attributes with jQuery
$("a").attr("href", "https://www.Yahoo.com");

// $("#drum").click(function() {
//     $("img").toggle();
// });

// $("#drum").click(function() {
//     $("img").toggle("slow", function() {
//         $("img").attr("src", "tom2.png")});
// });

$("#drum").click(function () {
  $("img").slideToggle("slow", function () {
    $("img").attr("src", "tom2.png");
  });
});

// Adding Event Listeners with jQuery

// $("h1").click(function()  {
//     $("h1").css("color", "purple");
//     $("h1").css("font-size", "4rem");

// });

$(".btn").click(function () {
  $("h1").css("color", "purple");
});

$("#drum").click(() => {
  $("#drum").css("background-color", "red");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").mousemove(function () {
  $("h1").css("color", "green");
});

$("h1").mouseleave(function () {
  $("h1").addClass("big-title");
});
