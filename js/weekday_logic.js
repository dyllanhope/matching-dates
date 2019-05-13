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
    var element = 1;
    var indexDay;

    function determineDay(num, firstDate, secondDate) {
        element = num || 1;
        var dateOne = firstDate || '2018-01-01';
        var dateTwo = secondDate || '2019-01-01';
        if (element === 1) {
            var selectedDate = new Date(dateOne);
        } else if (element === 2) {
            var selectedDate = new Date(dateTwo);
        }
        if (selectedDate.getDay() === 0) {
            indexDay = 6;
        } else {
            indexDay = selectedDate.getDay() - 1;
        }

        if (element === 1) {
            firstDay = weekdaysList[indexDay].day;
        } else if (element === 2) {
            secondDay = weekdaysList[indexDay].day;
        }
    }
    function createElement(items) {
        var out = "<ul>";

        for (var i = 0, l = items.length; i < l; i++) {
            var tempDay = items[i].day;
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

    function displayFirst() {
        return firstDay;
    }

    function displaySecond() {
        return secondDay;
    }

    return {
        day: determineDay,
        buildEle: createElement,
        weekdays: displayWeek,
        first: displayFirst,
        second: displaySecond
    }
}