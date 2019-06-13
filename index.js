let cal = require('./calendar');

// validate a date
// console.log(cal.dateIsValid(2, 29, 2019));
console.log(cal.generateMonth(1, 2020, { monthShort: true, dayOfWeekShort: true }));
console.log(cal.generateMonth(2, 2020));
// usage
// console.log(generateMonth(1, 2019));
// console.log(generateMonth(2, 2019));
// console.log(generateMonth(3, 2019));
// console.log(generateMonth(4, 2019));
// console.log(generateMonth(5, 2019));
// console.log(generateMonth(6, 2019));
// console.log(generateMonth(7, 2019));
// console.log(generateMonth(8, 2019));
// console.log(generateMonth(9, 2019));
// console.log(generateMonth(10, 2019));
// console.log(generateMonth(11, 2019));
// console.log(generateMonth(12, 2019));