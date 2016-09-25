function pageSetup(){

  //log current time in console
  var current = new Date();
  console.log(current);

  //run clock
  makeClock();

}

function makeClock() {

  // get current time and save as variable "datetime"
  var datetime = new Date();
  //console.log(datetime);

  // get hours, minutes, seconds from datetime
  var hour = datetime.getHours();

  if (hour > 12){
    hour = hour - 12;
  }

  hour = ("0" + hour).slice(-2);

  var minutes = datetime.getMinutes();
  minutes = ("0" + minutes).slice(-2);

  var seconds = datetime.getSeconds();
  seconds = ("0" + seconds).slice(-2);

  // change clock background color based on seconds
  if ( (0 <= seconds) && (seconds < 10) ){
    document.getElementById('clock').style.backgroundColor = '#931616';
  }

  if ( (10 <= seconds) && (seconds < 20) ){
    document.getElementById('clock').style.backgroundColor = '#d96565';
  }

  if ( (20 <= seconds) && (seconds < 30) ){
    document.getElementById('clock').style.backgroundColor = '#931616';
  }

  if ( (30 <= seconds) && (seconds < 40) ){
    document.getElementById('clock').style.backgroundColor = '#e4adad';
  }

  if ( (40 <= seconds) && (seconds < 50) ){
    document.getElementById('clock').style.backgroundColor = '#ebdada';
  }

  if ( (50 <= seconds) && (seconds <= 60) ){
    document.getElementById('clock').style.backgroundColor = '#ffffff';
  }

  // change timer width as a percentage based on seconds
  var percent = seconds / 60;
  percent = percent * 100;
  document.getElementById('timer').style.width = percent +'%';

  // change page background color based on value of seconds
  // first get a random number
  var rand = Math.floor((Math.random() * 100) + 10);
  // use seconds to make it more random
  rand = rand * seconds;
  // convert random number to a string and get last two digits
  rand = rand.toString().slice(-2);
  // create hex from random number and seconds
  var hex = 'ff' + rand + seconds;
  var hover = 'ff:' + rand + ':' + seconds;
  // create body background to new hex
  document.body.style.backgroundColor = '#' + hex;
  document.getElementById('hover').innerHTML = hover;

  // combine H:M:S
  var displayTime = hour + ':' + minutes + ':' + seconds;

  // display H:M:S in clock div
  document.getElementById('clock').innerHTML = displayTime;

  // update clock div every half second
  var refreshClock = setTimeout (makeClock, 1000);

}
