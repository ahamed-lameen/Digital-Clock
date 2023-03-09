/**
*
* base.js
* @author - Lameen
* @date - 09/03/2023
**/

function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var amOrPm = findAmOrPm(hours);
    var day = date.getDay();
    var month = date.getMonth();
    var weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if(hours > 12 ) {
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0"+ hours;
    } 
    if (minute < 10) {
        minute = "0"+ minute;
    } 
    if (seconds < 10) {
        seconds = "0" + seconds;
    } 
    var presentDay = weekDay[day];
    var presentMonth = months[month];
    document.getElementById("hours").innerHTML = hours + ":";
    document.getElementById("minute").innerHTML = minute + ":";
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("meridian").innerHTML = amOrPm;
    document.getElementById("day").innerHTML = presentDay + ",";
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("month").innerHTML = presentMonth;
    document.getElementById("year").innerHTML = date.getFullYear();
}

function findAmOrPm(hours) {
    var amOrPm = hours <= 12 ? "AM" : "PM";
    return amOrPm;
}
setInterval(clock,1000);