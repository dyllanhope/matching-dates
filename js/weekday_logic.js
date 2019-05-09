function WeekdayColourManager() {
    var weekdaysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var firstDay = '';
    var secondDay = '';
    var element = 0;

    function determineIndex(num) {
        element = num || 1;
        if (element === 1) {
            var selectedDate = new Date(firstDateElem.value);
        } else if (element === 2) {
            var selectedDate = new Date(secondDateElem.value);
        }
        if (selectedDate.getDay() === 0) {
            var indexDay = 6;
        } else {
            var indexDay = selectedDate.getDay() - 1;
        }
        return indexDay;
    }

    function determineColour(){
        if(element === 1){
            firstDay = weekdaysList[determineIndex(element)];
            if (firstDay === secondDay) {
                return "green";
            } else {
                return "blue";
            }
        } else if(element === 2){
            secondDay = weekdaysList[determineIndex(element)];
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