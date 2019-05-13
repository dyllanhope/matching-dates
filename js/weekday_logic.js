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
    }

    function displayWeek() {
        return weekdaysList;
    }
    function displayFirstDay(){
        return firstDay;
    }
    function displaySecondDay(){
        return secondDay;
    }

    return {
        setDays: determineDay,
        weekdays: displayWeek,
        first: displayFirstDay,
        second: displaySecondDay
    }
}