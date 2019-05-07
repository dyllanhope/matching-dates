var firstDateElem = document.getElementById("first");
var secondDateElem = document.getElementById("second");
var weekdayListElem = document.getElementsByClassName(".weekday");
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var firstDay = '';
var secondDay = '';

window.onload = function(){
    whiten();
}
firstDateElem.onchange = function(){
    var firstDate = new Date(firstDateElem.value);
    firstDay = weekdays[firstDate.getDay()];
    var firstEle = document.getElementById(firstDay);
    firstEle.style.backgroundColor = "blue";
    whiten();
}
secondDateElem.onchange = function(){
    var secondDate = new Date(secondDateElem.value);
    secondDay = weekdays[secondDate.getDay()];
    var secondEle = document.getElementById(secondDay);
    secondEle.style.backgroundColor = "red";
    whiten();
}
function whiten(){
    for(var i=0;i<weekdays.length;i++){
        var ele = document.getElementById(weekdays[i]);
        if((weekdays[i]!==firstDay)&&(weekdays[i]!==secondDay))
        ele.style.backgroundColor = "white";
    }
}