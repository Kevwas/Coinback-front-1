"use strict";

var deadline = 'July 29 2020 23:59:59 GMT-0300';

function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// countdown
var timer = setInterval(function () {

  // get today's date
  var remaining = getTimeRemaining(deadline);

  // display
  document.getElementById("timer").innerHTML = "<div class=\"days\"> \
      <div class=\"numbers\">" + remaining.days + "</div>días</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + remaining.hours + "</div>horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + remaining.minutes + "</div>minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + remaining.seconds + "</div>segundos</div> \
</div>";
}, 1000);