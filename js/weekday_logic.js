function WeekdayColourManager() {
    var weekdaysList = [{day:"Monday"} ,
                        {day:"Tuesday"}, 
                        {day:"Wednesday"}, 
                        {day:"Thursday"}, 
                        {day:"Friday"}, 
                        {day:"Saturday"}, 
                        {day:"Sunday"}];
    var firstDay = 'Monday';
    var secondDay = 'Tuesday';
    var element = 1;
    var indexDay;

    function determineIndex(num, firstDate, secondDate) {
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
    }

    function determineDay() {
        if (element === 1) {
            firstDay = Object.values(weekdaysList[indexDay]);
        } else if (element === 2) {
            secondDay = Object.values(weekdaysList[indexDay]);
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
        updateDay: determineDay,
        weekdays: displayWeek,
        first: displayFirst,
        second: displaySecond
    }
}