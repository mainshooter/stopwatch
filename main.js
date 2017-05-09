var stopwatch = document.getElementById('stopwatch');
document.getElementById("start").addEventListener("click", startStopwatch);


var miliseconds = 0;
var seconds = 0;
var minuuts = 0;
var hours = 0;

var repeater;

function startTimer() {
  miliseconds++;
  converter();
}
function converter() {
  //If the miliseconds if 100 we go to seconds
  if (miliseconds >= 100) {
    seconds++;
    miliseconds = 0;
  }
  else if (seconds >= 60) {
    minuuts++;
    seconds = 0;
  }
  else if (minuuts >= 60) {
    hours++;
    minuuts = 0;
  }
  displayStopwatch();
}

function startStopwatch() {
  repeater = setInterval(startTimer, 10);
}

function displayStopwatch() {
  stopwatch.innerHTML = hours + ":" + minuuts + ":" + seconds + ":" + miliseconds;
}
