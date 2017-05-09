var stopwatch = document.getElementById('stopwatch');

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("end").addEventListener("click", endStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);




var miliseconds = 0;
var seconds = 0;
var minuuts = 0;
var hours = 0;

var repeater;

function getHours() {
  return(hours);
}
function getMinuuts() {
  return(minuuts)
}
function getSeconds() {
  return(seconds);
}
function getmiliseconds() {
  return(miliseconds);
}

function startTimer() {
  // Controls the start of the function
  miliseconds++;
  converter();
}
function endStopwatch() {
  clearInterval(repeater);
}
function resetStopwatch() {
  miliseconds = 000;
  seconds = 0;
  minuuts = 0;
  hours = 0;

  displayStopwatch();
}
function displayStopwatch() {
  displayHours();
  displayMinuuts();
  displaySeconds();
  displayMiliseconds();
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
  repeater = setInterval(startTimer, 1);
}

function displayHours() {
  if (getHours().toString().length == 1) {
    document.getElementById("hours").innerHTML = "0" + getHours();
  }
  else {
    document.getElementById("hours").innerHTML = getHours();
  }
}
function displayMinuuts() {
  if (getMinuuts().toString().length == 1) {
    document.getElementById("minuuts").innerHTML = "0" + getMinuuts();
  }
  else {
    document.getElementById("minuuts").innerHTML = getMinuuts();
  }
}
function displaySeconds() {
  if (getSeconds().toString().length == 1) {
    document.getElementById("seconds").innerHTML = "0" + getSeconds();
  }
  else {
    document.getElementById("seconds").innerHTML = getSeconds();
  }
}

function displayMiliseconds() {
  if (getmiliseconds().toString().length == 1) {
    document.getElementById("miliseconds").innerHTML = "00" + getmiliseconds();
  }
  else if (getmiliseconds().toString().length == 2) {
    document.getElementById("miliseconds").innerHTML = "0" + getmiliseconds();
  }
  else {
    document.getElementById("miliseconds").innerHTML = getmiliseconds();
  }
}
