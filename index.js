let cal = require('./calendar');
const fs = require('fs');
const pdfDoc = require('pdfkit');


const year = 2020;
// validate a date
// console.log(cal.dateIsValid(2, 29, 2019));


// console.log(cal.generateMonth(1, 2020, { monthShort: true, dayOfWeekShort: true }));
// console.log(cal.generateMonth(2, 2020));
// // usageconsole.log(generateMonth(1, 2019));
// console.log(cal.generateMonth(2, 2019));
// console.log(cal.generateMonth(3, 2019));
// console.log(cal.generateMonth(4, 2019));
// console.log(cal.generateMonth(5, 2019));
// console.log(cal.generateMonth(6, 2019));
// console.log(cal.generateMonth(7, 2019));
// console.log(cal.generateMonth(8, 2019));
// console.log(cal.generateMonth(9, 2019));
// console.log(cal.generateMonth(10, 2019));
// console.log(cal.generateMonth(11, 2019));
// console.log(cal.generateMonth(12, 2019));


const doc = new pdfDoc({
    size: [864, 1872]
});


renderYear();

writeToFile();




function renderYear() {
    doc.fontSize(100);
    doc.font('Helvetica-Bold');
    doc.text(`${year}`, 0, 72 * 9, {
        width: 864,
        align: 'center'
    });
}

function writeToFile() {
    doc.pipe(fs.createWriteStream(`${year}_Calendar12x26.pdf`)); // write to PDF
    doc.end();
}

function renderMonth(month, year) {
    data = cal.generateMonth(month, year);
}