function WeekdayColourManager() {
    var weekdaysList = [{ day: "Monday" },
    { day: "Tuesday" },
    { day: "Wednesday" },
    { day: "Thursday" },
    { day: "Friday" },
    { day: "Saturday" },
    { day: "Sunday" }];
    var firstDay = '';
    var secondDay = '';

    function determineDay(firstD, secondD) {
        var firstIndexDay;
        var secondIndexDay;
        var firstDate = firstD || undefined;
        var secondDate = secondD || undefined;

        if (firstDate != undefined) {
            var firstSelectedDate = new Date(firstDate);
            if (firstSelectedDate.getDay() === 0) {
                firstIndexDay = 6;
            } else {
                firstIndexDay = firstSelectedDate.getDay() - 1;
            }
            firstDay = weekdaysList[firstIndexDay].day;
        } else if(firstDate==undefined){
            firstDay = '';
        }

        if (secondDate!= undefined) {
            var secondSelectedDate = new Date(secondDate);
            if (secondSelectedDate.getDay() === 0) {
                secondIndexDay = 6;
            } else {
                secondIndexDay = secondSelectedDate.getDay() - 1;
            }
            secondDay = weekdaysList[secondIndexDay].day;
        } else if(secondDate==undefined){
            secondDay = '';
        }
    }

    function createElement() {
        var out = "<ul>";

        for (var i = 0, l = weekdaysList.length; i < l; i++) {
            var tempDay = weekdaysList[i].day;
            if ((tempDay === firstDay) && (tempDay === secondDay)) {
                out = out + "<li class='both' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            } else if (tempDay === firstDay) {
                out = out + "<li class='first' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            } else if (tempDay === secondDay) {
                out = out + "<li class='second' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            } else {
                out = out + "<li class='clear' id='" + tempDay + "'><h3>" + tempDay + "</h3></li>";
            }
        }
        return out + "</ul>";
    }

    function displayWeek() {
        return weekdaysList;
    }

    return {
        day: determineDay,
        buildEle: createElement,
        weekdays: displayWeek
    }
}