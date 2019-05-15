describe("WeekdayColourManager testing", function () {
    it("Sould return the weekdays list with all 'styles' set to 'clear' with no input", function () {
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
    it("Should return all the elements with style 'clear' except Monday with style 'first'", function () {
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
    it("Should return all the elements with style 'clear' except Tuesday with style 'second'", function () {
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
    it("Should return all the elements with style 'clear' except Tuesday with style 'second' and Monday with style 'first'", function () {
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
