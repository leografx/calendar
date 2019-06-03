// const dateCalGridRows = [
//     [1, 2, 3, 4, 5, 6, 7],
//     [8, 9, 10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19, 20, 21],
//     [22, 23, 24, 25, 26, 27, 28],
//     [29, 30, 31, 32, 33, 34, 35],
//     [36, 37, 38, 39, 40, 41, 42]
// ];

const dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const datesLead = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const sundayColumn = [1, 8, 15, 22, 29, 36];
// const mondayColumn = [2, 9, 16, 23, 30, 37];
// const tuesdayColumn = [3, 10, 17, 24, 31, 38];
// const wednesdayColumn = [4, 11, 18, 25, 32, 39];
// const thursdayColumn = [5, 12, 19, 26, 33, 40];
// const fridayColumn = [6, 13, 20, 27, 34, 41];
// const saturdayColumn = [7, 14, 21, 28, 35, 42];


let firstDayOfTheMonth = function (month, day, year) {
    return new Date(`${month}/${day}/${year}`).getDay();
}



function setDatesPosition(startPosition, month) {
    let d = Object.assign(dates);

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        d.pop();
    }

    for (let i = 0; i < startPosition; i++) {
        d.unshift(' ');
    }

    let push = (42 - d.length);
    for (let i = 0; i < push; i++) {
        d.push(' ');
    }

    return d;
}



function generateMonth(month, day, year) {
    const dayOfFirstDate = firstDayOfTheMonth(month, day, year)
    const d = setDatesPosition(dayOfFirstDate, month);

    const row1 = [d[0], d[1], d[2], d[3], d[4], d[5], d[6]];
    const row2 = [d[7], d[8], d[9], d[10], d[11], d[12], d[13]];
    const row3 = [d[14], d[15], d[16], d[17], d[18], d[19], d[20]];
    const row4 = [d[21], d[22], d[23], d[24], d[25], d[26], d[27]];
    const row5 = [d[28], d[29], d[30], d[31], d[32], d[33], d[34]];
    const row6 = [d[35], d[36], d[37], d[38], d[39], d[40], d[41]];

    if (d[28] === ' ') {
        return [row1, row2, row3, row4];
    }

    if (d[35] === ' ') {
        return [row1, row2, row3, row4, row5];
    }

    return [row1, row2, row3, row4, row5, row6];
}

console.log(generateMonth(8, 1, 2019));