function WeekdayColourManager() {
    var weekdaysList = [{ day: "Monday", style: "clear" },
    { day: "Tuesday", style: "clear" },
    { day: "Wednesday", style: "clear" },
    { day: "Thursday", style: "clear" },
    { day: "Friday", style: "clear" },
    { day: "Saturday", style: "clear" },
    { day: "Sunday", style: "clear" }];

    function determineDay(firstD, secondD) {
        var dateString = firstD + ',' + secondD;
        var selectedIndex = [-1,-1];
        var selectedDate = '';
        var datesArr = dateString.split(',');

        for (var x = 0; x < weekdaysList.length; x++) {
            weekdaysList[x].style = "clear";
        }

        for (var k = 0; k < datesArr.length; k++) {
            if (datesArr[k]) {
                selectedDate = new Date(datesArr[k]);
                if (selectedDate.getDay() === 0) {
                    selectedIndex[k] = 6;
                } else {
                    selectedIndex[k] = selectedDate.getDay() - 1;
                }
    
                if (k === 0) {
                    weekdaysList[selectedIndex[0]].style = "first";
                }else if (k === 1) {
                    weekdaysList[selectedIndex[1]].style = "second";
                }
                if(selectedIndex[0]===selectedIndex[1]){
                    weekdaysList[selectedIndex[0]].style = "both";
                }
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