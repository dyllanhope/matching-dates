function WeekdayColourManager() {
    var weekdaysList = [{ day: "Monday", style: "clear" },
    { day: "Tuesday", style: "clear" },
    { day: "Wednesday", style: "clear" },
    { day: "Thursday", style: "clear" },
    { day: "Friday", style: "clear" },
    { day: "Saturday", style: "clear" },
    { day: "Sunday", style: "clear" }];

    function determineDay(firstD, secondD) {

        clearWeekdayListStyling();

        let firstDayData = getWeekDayData(firstD);
        let secondDayData = getWeekDayData(secondD);

        setWeekdayListStyling(firstDayData, secondDayData);

    }
    function clearWeekdayListStyling() {
        for (var x = 0; x < weekdaysList.length; x++) {
            weekdaysList[x].style = "clear";
        }
    }

    function getWeekDayData(date) {
        var returnData = { day: "", index: -1 };
        if (date) {
            var selectedDate = new Date(date);
            if (selectedDate.getDay() === 0) {
                returnData.index = 6;
            } else {
                returnData.index = selectedDate.getDay() - 1;
            }
            returnData.day = weekdaysList[returnData.index].day;
        }
        return returnData;
    }

    function setWeekdayListStyling(firstData, secondData) {
        if (secondData.day === firstData.day) {
            weekdaysList[secondData.index].style = "both";
        } else {
            if (secondData.index > -1) {
                weekdaysList[secondData.index].style = "second";
            }
            if (firstData.index > -1) {
                weekdaysList[firstData.index].style = "first";
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