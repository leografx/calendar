const chai = require('chai');
const cal = require('../calendar');


describe('generate month', () => {
    it('should generate an object', () => {
        chai.expect(cal.generateMonth(2, 2019)).to.be.an('object');
    });
});

describe('Calendar tests', () => {
    it('2-28-2019 should be true', () => {
        chai.expect(cal.dateIsValid(2, 28, 2019)).to.be.true;
    });

    it('2-29-2019 should be false', () => {
        chai.expect(cal.dateIsValid(2, 29, 2019)).to.be.false;
    });

    it('December 1 1971 should be 3 which is wednesday', () => {
        const day = cal.getDaysOfWeek();
        chai.expect(cal.firstDayOfTheMonth(12, 1971)).to.equal(3);
        chai.expect(day[cal.firstDayOfTheMonth(12, 1971)]).to.be.equal('Wednesday');
    });

    it('century 1700 is not a leap year but 2000 is', () => {
        chai.expect(cal.isLeapYear(1700)).to.be.false;
        chai.expect(cal.isLeapYear(2000)).to.be.true;
    });

});