describe("Index testing", function () {
    it("Sould return the weekday 'Monday'", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(1, '2018-01-01', '2019-01-01'), "Monday");
    })
    it("Sould return the weekday 'Tuesday'", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(2, '2018-01-01', '2019-01-01'), "Tuesday");
    })
    it("Sould return the the default weekday 'Monday'", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(), "Monday");
    })
})
describe("Colour testing", function () {
    it("Sould return the colour the block changes to as 'blue'", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.index(1, '2018-01-01', '2019-01-01');
        assert.equal(weekdayInstance.colour(), "blue");
    })
    it("Sould return the colour the block changes to as 'red'", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.index(2, '2018-01-01', '2019-01-01');
        assert.equal(weekdayInstance.colour(), "red");
    })
    it("Sould return the colour the block changes to as 'green'", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.index(1, '2018-01-02', '2019-01-01');
        assert.equal(weekdayInstance.colour(), "green");
    })
    it("Sould return the colour the block changes to as 'blue' with no input", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.colour(), "blue");
    })
})
describe("Weekday return testing", function () {
    it("Sould return the weekday 'Monday' for the first input", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.index(1, '2018-01-01', '2019-01-01');
        weekdayInstance.colour();
        assert.equal(weekdayInstance.first(), "Monday");
    })
    it("Sould return the weekday 'Tuesday' for the second input", function () {
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.index(2, '2018-01-01', '2019-01-01');
        weekdayInstance.colour();
        assert.equal(weekdayInstance.second(), "Tuesday");
    })
    it("Sould return the weekday 'Monday' for no input", function () {
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.first(), "Monday");
    })
})