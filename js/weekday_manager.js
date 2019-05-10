var firstDateElem = document.getElementById("first");
var secondDateElem = document.getElementById("second");
var weekdayTemplateSource = document.querySelector(".weekdayBarTemplate").innerHTML;
var weekdayData = document.querySelector(".weekdayData");
var weekdayTemplate = Handlebars.compile(weekdayTemplateSource);
var weekdayInstance = WeekdayColourManager();
var weekdays = weekdayInstance.weekdays();

window.onload = function () {
    var weekdaysName = { daysOfWeek: weekdays };
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
        if ((weekdays[i] !== weekdayInstance.first()) && (weekdays[i] !== weekdayInstance.second())) {
            ele.style.backgroundColor = "white";
            ele.style.color = "black";
        }
    }
    if (weekdayInstance.first() !== weekdayInstance.second()) {
        var firstReset = document.getElementById(weekdayInstance.first());
        var secondReset = document.getElementById(weekdayInstance.second());
        firstReset.style.backgroundColor = "blue";
        firstReset.style.color = "white";
        secondReset.style.backgroundColor = "red";
        secondReset.style.color = "white";
    }
}
function dayColourChange(num) {
    var selectedDay = '';
    selectedDay = weekdayInstance.index(num, firstDateElem.value, secondDateElem.value);

    var selectedElem = document.getElementById(selectedDay);
    selectedElem.style.backgroundColor = weekdayInstance.colour();
    selectedElem.style.color = "white";


}