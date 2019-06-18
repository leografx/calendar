let getDaysOfWeek = function (short = false) {
    if (short) {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }

    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];;
}


let getMonth = function (m, short = false) {
    const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (short) {
        return monthShort[m];
    }
    return month[m];

}

let getDates = function (padding) {

    if (padding) {
        return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    }

    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

}


let firstDayOfTheMonth = function (month, year) {
    return new Date(`${month}/1/${year}`).getDay();
}

let isLeapYear = function (year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function setDatesPosition(month, day, year) {
    let d = [];
    d = getDates();

    // leap year
    if (month === 2) {
        if (isLeapYear(year)) {
            d.pop();
            d.pop();
        } else {
            d.pop();
            d.pop();
            d.pop();
        }
    }

    // 30 day months
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        d.pop();
    }

    // set front day blanks
    for (let i = 0; i < day; i++) {
        d.unshift(' ');
    }

    // set end day blanks
    let push = (42 - d.length);
    for (let i = 0; i < push; i++) {
        d.push(' ');
    }

    return d;
}

const generateMonth = function (month, year, option = { dayOfWeekShort: false, monthShort: false }) {
    let row1, row2, row3, row4, row5, row6;
    let d = [];
    let dayOfFirstDate = firstDayOfTheMonth(month, year)
    d = setDatesPosition(month, dayOfFirstDate, year);
    let days = getDaysOfWeek(option.dayOfWeekShort);
    let m = getMonth(month - 1, option.monthShort); // months[month - 1];

    row1 = [d[0], d[1], d[2], d[3], d[4], d[5], d[6]];
    row2 = [d[7], d[8], d[9], d[10], d[11], d[12], d[13]];
    row3 = [d[14], d[15], d[16], d[17], d[18], d[19], d[20]];
    row4 = [d[21], d[22], d[23], d[24], d[25], d[26], d[27]];
    row5 = [d[28], d[29], d[30], d[31], d[32], d[33], d[34]];
    row6 = [d[35], d[36], d[37], d[38], d[39], d[40], d[41]];

    if (d[28] === ' ') {
        return { year, month: m, days: days, row1, row2, row3, row4 };
    }

    if (d[35] === ' ') {
        return { year, month: m, days: days, row1, row2, row3, row4, row5 };
    }

    return { year, month: m, days: days, row1, row2, row3, row4, row5, row6 };
}

const dateIsValid = function (month, date, year) {
    let dayOfFirstDate = firstDayOfTheMonth(month, year)
    let dates = setDatesPosition(month, dayOfFirstDate, year);

    return (dates.includes(String(date)));
}

// console.log(generateMonth(2, 2019, { dayOfWeekShort: true, monthShort: true }))

module.exports.dateIsValid = dateIsValid;
module.exports.generateMonth = generateMonth;
module.exports.setDatesPosition = setDatesPosition;
module.exports.firstDayOfTheMonth = firstDayOfTheMonth;
module.exports.getDaysOfWeek = getDaysOfWeek;
module.exports.isLeapYear = isLeapYear; //?

// console.log(generateMonth(12, 1971))