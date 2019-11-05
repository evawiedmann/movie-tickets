// Business Logic

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  switch (this.movie) {
    case "titanic":
      var movieModifier = 8;
      break;
    case "rambo":
      var movieModifier = 10;
      break;
    case "serpico":
      var movieModifier = 12;
  }
  var timeModifier = ((this.time === "matinee") ? -2 : 0);
  var ageModifier = ((this.age === "adult") ? 1.0 : 0.9);
  
  return "$" + ((movieModifier + timeModifier) * ageModifier).toFixed(2);
}



// UI

$(document).ready(function () {
$("form#options").submit(function(event) {
  event.preventDefault();
  $("select#movieInput").val();
  $("#answer").show();
  var ticket = new Ticket($("select#movieInput").val(), $("select#timeInput").val(), $("select#ageInput").val());
  console.log(ticket.price());
})


});
