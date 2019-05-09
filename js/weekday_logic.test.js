describe("Index testing",function(){
    it("Sould return the weekday 'Monday'",function(){
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(1,'2018-01-01','2019-01-01'),"Monday")
    })
    it("Sould return the weekday 'Tuesday'",function(){
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(2,'2018-01-01','2019-01-01'),"Tuesday")
    })
    it("Sould return the the default weekday 'Monday'",function(){
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(),"Monday")
    })
})
describe("Colour testing",function(){
    it("Sould return the weekday 'Monday'",function(){
        var weekdayInstance = WeekdayColourManager();
        weekdayInstance.index(1,'2018-01-01','2019-01-01');
        assert.equal(weekdayInstance.colour(),"blue")
    })
    it("Sould return the weekday 'Tuesday'",function(){
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(2,'2018-01-01','2019-01-01'),"Tuesday")
    })
    it("Sould return the the default weekday 'Monday'",function(){
        var weekdayInstance = WeekdayColourManager();
        assert.equal(weekdayInstance.index(),"Monday")
    })
})