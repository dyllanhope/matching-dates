var firstDateElem = document.getElementById("first");
var secondDateElem = document.getElementById("second");
var weekdayTemplateSource = document.querySelector(".weekdayBarTemplate").innerHTML;
var weekdayData = document.querySelector(".weekdayData");
var weekdayTemplate = Handlebars.compile(weekdayTemplateSource);

var weekdayInstance = WeekdayColourManager();

window.onload = function () {
    buildWeekdays();
}
firstDateElem.onchange = function () {
    weekdayInstance.setDays(firstDateElem.value, secondDateElem.value);
    buildWeekdays();
}
secondDateElem.onchange = function () {
    weekdayInstance.setDays(firstDateElem.value, secondDateElem.value);
    buildWeekdays();
}

function buildWeekdays() {
    var weekdaysName = { daysOfWeek: weekdayInstance.weekdays() };
    var weekdayDataHTML = weekdayTemplate(weekdaysName);
    weekdayData.innerHTML = weekdayDataHTML;
}
