// Set the date we're counting down to
var countDownDate = new Date("Jun 26, 2026 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML =
    days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "LE SERVEUR EST UP !";
  }
}, 1000);

const titles = [
  "SMLN Saison 5 🌹",
  "SurMod",
  "LaNat",
  "Saison 5",
];

let index = 0;

setInterval(() => {
  document.title = titles[index];
  index = (index + 1) % titles.length;
}, 2000);
