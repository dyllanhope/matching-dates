function WeekdayColourManager() {
    var weekdaysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var firstDay = 'Monday';
    var secondDay = 'Tuesday';
    var element = 1;
    var indexDay ;

    function determineIndex(num,firstDate,secondDate) {
        element = num || 1;
        var dateOne = firstDate || '2018-01-01';
        var dateTwo = secondDate || '2019-01-01'
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
        return weekdaysList[indexDay];
    }

    function determineColour(){
        if(element === 1){
            firstDay = weekdaysList[indexDay];
            if (firstDay === secondDay) {
                return "green";
            } else {
                return "blue";
            }
        } else if(element === 2){
            secondDay = weekdaysList[indexDay];
            if (secondDay === firstDay) {
                return "green";
            } else {
                return "red";
            }
        }
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
        index: determineIndex,
        colour: determineColour,
        weekdays: displayWeek,
        first: displayFirst,
        second: displaySecond
    }
}