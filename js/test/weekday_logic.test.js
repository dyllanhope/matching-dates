describe("Mapping testing", function () {
    it("Sould return the weekdays list with all 'styles' set to 'clear' with no input.", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.deepEqual(weekdayInstance.weekdays(),
            [
                { day: "Sunday", style: "clear" },
                { day: "Monday", style: "clear" },
                { day: "Tuesday", style: "clear" },
                { day: "Wednesday", style: "clear" },
                { day: "Thursday", style: "clear" },
                { day: "Friday", style: "clear" },
                { day: "Saturday", style: "clear" }
            ]);
    })
    it("Should return all the elements with style 'clear' except Monday with style 'first'.", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.setDays('2018-01-01', '')
        assert.deepEqual(weekdayInstance.weekdays(),
            [
                { day: "Sunday", style: "clear" },
                { day: "Monday", style: "first" },
                { day: "Tuesday", style: "clear" },
                { day: "Wednesday", style: "clear" },
                { day: "Thursday", style: "clear" },
                { day: "Friday", style: "clear" },
                { day: "Saturday", style: "clear" }
            ]);
    })
    it("Should return all the elements with style 'clear' except Tuesday with style 'second'.", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.setDays('', '2019-01-01')
        assert.deepEqual(weekdayInstance.weekdays(),
            [
                { day: "Sunday", style: "clear" },
                { day: "Monday", style: "clear" },
                { day: "Tuesday", style: "second" },
                { day: "Wednesday", style: "clear" },
                { day: "Thursday", style: "clear" },
                { day: "Friday", style: "clear" },
                { day: "Saturday", style: "clear" }
            ]);
    })
    it("Should return all the elements with style 'clear' except Tuesday with style 'second' and Monday with style 'first'.", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.setDays('2018-01-01', '2019-01-01')
        assert.deepEqual(weekdayInstance.weekdays(),
            [
                { day: "Sunday", style: "clear" },
                { day: "Monday", style: "first" },
                { day: "Tuesday", style: "second" },
                { day: "Wednesday", style: "clear" },
                { day: "Thursday", style: "clear" },
                { day: "Friday", style: "clear" },
                { day: "Saturday", style: "clear" }
            ]);
    })
    it("Should return all the elements with style 'clear' except Tuesday with style 'both' when dates fall on same day.", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.setDays('2018-01-02', '2019-01-01')
        assert.deepEqual(weekdayInstance.weekdays(),
            [
                { day: "Sunday", style: "clear" },
                { day: "Monday", style: "clear" },
                { day: "Tuesday", style: "both" },
                { day: "Wednesday", style: "clear" },
                { day: "Thursday", style: "clear" },
                { day: "Friday", style: "clear" },
                { day: "Saturday", style: "clear" }
            ]);
    })
})

describe("GetDayData testing", function () {
    it("Should return and empty object '{day : '', index: -1}' with no input of the getData function.", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.deepEqual(weekdayInstance.getData(''), { day: '', index: -1 });
    })
    it("Should return an object '{day : 'Monday', index: 1}' with input of '2018-01-01'.", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.deepEqual(weekdayInstance.getData('2018-01-01'), { day: 'Monday', index: 1 });
    })
    it("Should return an object '{day: 'Saturday', index: 6}' with input of '1998-08-01'.", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.deepEqual(weekdayInstance.getData('1998-08-01'), { day: 'Saturday', index: 6 });
    })
})
