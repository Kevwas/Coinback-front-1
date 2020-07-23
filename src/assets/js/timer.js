
const deadline = 'July 29 2020 23:59:59 GMT-0300';

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

// countdown
let timer = setInterval(function() {

    // get today's date
    const remaining = getTimeRemaining(deadline);

    // display
    document.getElementById("timer").innerHTML =
        "<div class=\"days\"> \
      <div class=\"numbers\">" + remaining.days + "</div>días</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + remaining.hours + "</div>horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + remaining.minutes + "</div>minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + remaining.seconds + "</div>segundos</div> \
</div>";

}, 1000);
