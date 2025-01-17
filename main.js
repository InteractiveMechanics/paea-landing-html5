// set the date we're counting down to
var target_date = new Date("April 30, 2016").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag elements
var countDays = document.getElementById('days');
var countHours = document.getElementById('hours');
var countMinutes = document.getElementById('minutes');

 
// update the tags every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag values
    countDays.innerHTML = days;
    countHours.innerHTML = hours;
    countMinutes.innerHTML = minutes;
 
}, 1000);
