function WeekdayColourManager() {
    var weekdaysList = [{ day: "Monday", style: "clear" },
    { day: "Tuesday", style: "clear" },
    { day: "Wednesday", style: "clear" },
    { day: "Thursday", style: "clear" },
    { day: "Friday", style: "clear" },
    { day: "Saturday", style: "clear" },
    { day: "Sunday", style: "clear" }];

    var firstDay = '';
    var secondDay = '';

    function determineDay(firstD, secondD) {
        var firstIndexDay = -1;
        var secondIndexDay = -1;
        var firstDate = firstD || undefined;
        var secondDate = secondD || undefined;

        for (var x = 0; x < weekdaysList.length; x++) {
            weekdaysList[x].style = "clear";
        }

        if (firstDate != undefined) {
            var firstSelectedDate = new Date(firstDate);
            if (firstSelectedDate.getDay() === 0) {
                firstIndexDay = 6;
            } else {
                firstIndexDay = firstSelectedDate.getDay() - 1;
            }

            firstDay = weekdaysList[firstIndexDay].day;
        } else if (firstDate == undefined) {
            firstDay = '';
        }

        if (secondDate != undefined) {
            var secondSelectedDate = new Date(secondDate);
            if (secondSelectedDate.getDay() === 0) {
                secondIndexDay = 6;
            } else {
                secondIndexDay = secondSelectedDate.getDay() - 1;
            }
            secondDay = weekdaysList[secondIndexDay].day;
        } else if (secondDate == undefined) {
            secondDay = '';
        }

        if (secondDay === firstDay) {
            weekdaysList[secondIndexDay].style = "both";
        } else {
            if (secondIndexDay > -1) {
                weekdaysList[secondIndexDay].style = "second";
            }
            if (firstIndexDay > -1) {
                weekdaysList[firstIndexDay].style = "first";
            }
        }
    }

    function displayWeek() {
        return weekdaysList;
    }

    return {
        setDays: determineDay,
        weekdays: displayWeek
    }
}