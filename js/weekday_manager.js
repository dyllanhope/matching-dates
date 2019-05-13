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
    weekdayInstance.index(1, firstDateElem.value, secondDateElem.value);
    weekdayInstance.updateDay();
    buildWeekdays();
}
secondDateElem.onchange = function () {
    weekdayInstance.index(2, firstDateElem.value, secondDateElem.value);
    weekdayInstance.updateDay();
    buildWeekdays();
}

function buildWeekdays() {
    var weekdaysName = { daysOfWeek: weekdayInstance.weekdays() };
    var weekdayDataHTML = weekdayTemplate(weekdaysName);
    weekdayData.innerHTML = weekdayDataHTML;
}

Handlebars.registerHelper('display', function (items,options) {
    var out = "<ul>";

    for (var i = 0, l = items.length; i < l; i++) {
        var tempDay = options.fn(items[i]).trim();
        if ((tempDay == weekdayInstance.first()) && (tempDay == weekdayInstance.second())) {
            out = out + "<li class='both' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
        } else if (tempDay == weekdayInstance.first()) {
            out = out + "<li class='first' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
        } else if (tempDay == weekdayInstance.second()) {
            out = out + "<li class='second' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
        } else {
            out = out + "<li class='clear' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
        }
    }

    return out + "</ul>";
});