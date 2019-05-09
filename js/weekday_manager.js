var firstDateElem = document.getElementById("first");
var secondDateElem = document.getElementById("second");
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var firstDay = '';
var secondDay = '';
var both = false;

window.onload = function () {
    dayColourChange(1);
    dayColourChange(2);
    whiten();
}
firstDateElem.onchange = function () {
    dayColourChange(1);
    whiten();
}
secondDateElem.onchange = function () {
    dayColourChange(2);
    whiten();
}
function whiten() {
    for (var i = 0; i < weekdays.length; i++) {
        var ele = document.getElementById(weekdays[i]);
        if ((weekdays[i] !== firstDay) && (weekdays[i] !== secondDay)){
            ele.style.backgroundColor = "white";
        }
    }
    if (firstDay !== secondDay){
        var firstReset = document.getElementById(firstDay);
        var secondReset = document.getElementById(secondDay);
        firstReset.style.backgroundColor = "blue";
        secondReset.style.backgroundColor = "red";
    }
}
function dayColourChange(num) {
    var selectedDay = '';
    if(num ===1){
        var selectedDate = new Date(firstDateElem.value);
    } else if(num ===2){
        var selectedDate = new Date(secondDateElem.value);
    }
    selectedDay = weekdays[selectedDate.getDay()];
    
    var selectedElem = document.getElementById(selectedDay);

    if(num === 1){
        firstDay = weekdays[selectedDate.getDay()];
        if (firstDay === secondDay) {
            selectedElem.style.backgroundColor = "green";
            both = true;
        } else {
            selectedElem.style.backgroundColor = "blue";
        }
    } else if(num === 2){
        secondDay = weekdays[selectedDate.getDay()];
        if (secondDay === firstDay) {
            selectedElem.style.backgroundColor = "green";
        } else {
            selectedElem.style.backgroundColor = "red";
        }
    }
    
}