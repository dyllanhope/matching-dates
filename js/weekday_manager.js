var firstDateElem = document.getElementById("first");
var secondDateElem = document.getElementById("second");
var weekdayTemplateSource = document.querySelector(".weekdayBarTemplate").innerHTML; 
var weekdayData = document.querySelector(".weekdayData");
var weekdayTemplate = Handlebars.compile(weekdayTemplateSource);
var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
var firstDay = '';
var secondDay = '';
var both = false;

window.onload = function () {
    var weekdaysName = {daysOfWeek: weekdays };
    var weekdayDataHTML = weekdayTemplate(weekdaysName);
    weekdayData.innerHTML = weekdayDataHTML;

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
    var element = num || 1;
    if(element ===1){
        var selectedDate = new Date(firstDateElem.value);
    } else if(element ===2){
        var selectedDate = new Date(secondDateElem.value);
    }
    if (selectedDate.getDay() === 0){
        var index = 6;
    } else {
        var index = selectedDate.getDay()-1;
    }
    selectedDay = weekdays[index];
    console.log(selectedDay);
    
    var selectedElem = document.getElementById(selectedDay);

    if(element === 1){
        firstDay = weekdays[index];
        if (firstDay === secondDay) {
            selectedElem.style.backgroundColor = "green";
        } else {
            selectedElem.style.backgroundColor = "blue";
        }
    } else if(element === 2){
        secondDay = weekdays[index];
        if (secondDay === firstDay) {
            selectedElem.style.backgroundColor = "green";
        } else {
            selectedElem.style.backgroundColor = "red";
        }
    }
    
}