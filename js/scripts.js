$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

if (height >= 60) {
  $("#adultAllowableRides").addClass("highlight").show();
  $("#childrenAllowableRides").show();
} else {
    $("#childrenAllowableRides").addClass("highlight").show();
    $("#adultAllowableRides").show();
  }
});
