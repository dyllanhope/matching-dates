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

Handlebars.registerHelper('isChange', function (options) {
    var firstDay = weekdayInstance.first();
    var secondDay = weekdayInstance.second();
    var out = "<ul>";

            var tempDay = options.fn(this).trim();
            if ((tempDay === firstDay) && (tempDay === secondDay)) {
                out = out + "<li class='both' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            } else if (tempDay === firstDay) {
                out = out + "<li class='first' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            } else if (tempDay === secondDay) {
                out = out + "<li class='second' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            } else {
                out = out + "<li class='clear' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            }
        return out + "</ul>";
});