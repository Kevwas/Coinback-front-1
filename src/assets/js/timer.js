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


function showTime(){
  const deadline = 'August 29 2020 23:59:59 GMT-0300';
  const remaining = getTimeRemaining(deadline);
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  remaining.hours = (remaining.hours < 10) ? "0" + remaining.hours : remaining.hours;
  remaining.minutes = (remaining.minutes < 10) ? "0" + remaining.minutes :remaining.minutes;
  remaining.seconds = (remaining.seconds < 10) ? "0" + remaining.seconds : remaining.seconds;
  
  var time = remaining.days + ":" + remaining.hours + ":" +  remaining.minutes + ":" + remaining.seconds;
  
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
  
  
  setTimeout(showTime, 1000);
  
}

  showTime()