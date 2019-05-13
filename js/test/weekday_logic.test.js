describe("WeekdayColourManager testing", function () {
    it("Sould return the weekdays list", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.deepEqual(weekdayInstance.weekdays(),[{ day: "Monday" },
        { day: "Tuesday" },
        { day: "Wednesday" },
        { day: "Thursday" },
        { day: "Friday" },
        { day: "Saturday" },
        { day: "Sunday" }]);
    })
    it("Should return all the elements with class 'clear' with no input",function(){
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.buildEle(),'<ul><li class=\'clear\' id=\'Monday\'><h3>Monday</h3></li><li class=\'clear\' id=\'Tuesday\'><h3>Tuesday</h3></li><li class=\'clear\' id=\'Wednesday\'><h3>Wednesday</h3></li><li class=\'clear\' id=\'Thursday\'><h3>Thursday</h3></li><li class=\'clear\' id=\'Friday\'><h3>Friday</h3></li><li class=\'clear\' id=\'Saturday\'><h3>Saturday</h3></li><li class=\'clear\' id=\'Sunday\'><h3>Sunday</h3></li></ul>');
    })
    it("Should return all the elements with class 'clear' except for Monday with class 'first'",function(){
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.day('2018-01-01',undefined);
        assert.equal(weekdayInstance.buildEle(),'<ul><li class=\'first\' id=\'Monday\'><h3>Monday</h3></li><li class=\'clear\' id=\'Tuesday\'><h3>Tuesday</h3></li><li class=\'clear\' id=\'Wednesday\'><h3>Wednesday</h3></li><li class=\'clear\' id=\'Thursday\'><h3>Thursday</h3></li><li class=\'clear\' id=\'Friday\'><h3>Friday</h3></li><li class=\'clear\' id=\'Saturday\'><h3>Saturday</h3></li><li class=\'clear\' id=\'Sunday\'><h3>Sunday</h3></li></ul>');
    })
    it("Should return all the elements with class 'clear' except for Tuesday with class 'second'",function(){
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.day(undefined,'2019-01-01');
        assert.equal(weekdayInstance.buildEle(),'<ul><li class=\'clear\' id=\'Monday\'><h3>Monday</h3></li><li class=\'second\' id=\'Tuesday\'><h3>Tuesday</h3></li><li class=\'clear\' id=\'Wednesday\'><h3>Wednesday</h3></li><li class=\'clear\' id=\'Thursday\'><h3>Thursday</h3></li><li class=\'clear\' id=\'Friday\'><h3>Friday</h3></li><li class=\'clear\' id=\'Saturday\'><h3>Saturday</h3></li><li class=\'clear\' id=\'Sunday\'><h3>Sunday</h3></li></ul>');
    })
    it("Should return all the elements with class 'clear' except for Wednesday with class 'both'",function(){
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.day('2018-01-03','2019-01-02');
        assert.equal(weekdayInstance.buildEle(),'<ul><li class=\'clear\' id=\'Monday\'><h3>Monday</h3></li><li class=\'clear\' id=\'Tuesday\'><h3>Tuesday</h3></li><li class=\'both\' id=\'Wednesday\'><h3>Wednesday</h3></li><li class=\'clear\' id=\'Thursday\'><h3>Thursday</h3></li><li class=\'clear\' id=\'Friday\'><h3>Friday</h3></li><li class=\'clear\' id=\'Saturday\'><h3>Saturday</h3></li><li class=\'clear\' id=\'Sunday\'><h3>Sunday</h3></li></ul>');
    })
})
