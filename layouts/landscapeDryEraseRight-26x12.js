let cal = require('../calendar');
const fs = require('fs');
const pdfDoc = require('pdfkit');


const year = process.argv[2];
const barColor = process.argv[3] || 'silver';
const monthColor = process.argv[4] || 'black';
const textColor = process.argv[5] || 'black';

const doc = new pdfDoc({ autoFirstPage: false });

doc.addPage({
    size: [1872, 864],
    margin: 0
})




renderMonth(cal.generateMonth(1, year), 36, 36);
renderMonth(cal.generateMonth(2, year), 324, 36);
renderMonth(cal.generateMonth(3, year), 612, 36);
renderMonth(cal.generateMonth(4, year), 900, 36);
renderMonth(cal.generateMonth(5, year), 36, 306);
renderMonth(cal.generateMonth(6, year), 324, 306);
renderMonth(cal.generateMonth(7, year), 612, 306);
renderMonth(cal.generateMonth(8, year), 900, 306);
renderMonth(cal.generateMonth(9, year), 36, 576);
renderMonth(cal.generateMonth(10, year), 324, 576);
renderMonth(cal.generateMonth(11, year), 612, 576);
renderMonth(cal.generateMonth(12, year), 900, 576);

renderYear();
addAreas();

writeToFile();




function renderYear() {
    doc.rect(1188, 36, 72, 864 - 72).fill(barColor)

    let yearString = year.toString();
    doc.fillColor('white');
    doc.fontSize(72);
    doc.font('Helvetica-Bold');
    doc.text(`${yearString[0]}${yearString[1]}\n${yearString[2]}\n${yearString[3]}`, 1188, 72, {
        width: 72,
        height: 864 - 144,
        align: 'center'
    });


}

function writeToFile() {
    doc.pipe(fs.createWriteStream(`${year}LandscapeDryEraseRightCalendar26x12.pdf`)); // write to PDF
    doc.end();
}

function renderMonth(obj, x, y) {


    doc.rect(x, y, 252, 20).fillAndStroke(barColor);

    doc.fillColor(monthColor);
    doc.font('Helvetica-Bold');
    doc.fontSize(20);
    doc.text(obj.month.toUpperCase(), x, y + 3, { align: 'center', width: 252, height: 18 });

    doc.fillColor(textColor);
    doc.fontSize(10);
    doc.font('Helvetica');
    doc.text('SUN', x + 0, y + 24, { align: 'center', width: 36 });
    doc.text('MON', x + 36, y + 24, { align: 'center', width: 36 });
    doc.text('TUE', x + 72, y + 24, { align: 'center', width: 36 });
    doc.text('WED', x + 108, y + 24, { align: 'center', width: 36 });
    doc.text('THU', x + 144, y + 24, { align: 'center', width: 36 });
    doc.text('FRI', x + 180, y + 24, { align: 'center', width: 36 });
    doc.text('SAT', x + 216, y + 24, { align: 'center', width: 36 });

    doc.fontSize(18);
    doc.text(obj.row1[0], x + 0 - 10, y + 39, { align: 'right', width: 36 });
    doc.text(obj.row1[1], x + 36 - 10, y + 39, { align: 'right', width: 36 });
    doc.text(obj.row1[2], x + 72 - 10, y + 39, { align: 'right', width: 36 });
    doc.text(obj.row1[3], x + 108 - 10, y + 39, { align: 'right', width: 36 });
    doc.text(obj.row1[4], x + 144 - 10, y + 39, { align: 'right', width: 36 });
    doc.text(obj.row1[5], x + 180 - 10, y + 39, { align: 'right', width: 36 });
    doc.text(obj.row1[6], x + 216 - 10, y + 39, { align: 'right', width: 36 });

    doc.text(obj.row2[0], x + 0 - 10, y + 75, { align: 'right', width: 36 });
    doc.text(obj.row2[1], x + 36 - 10, y + 75, { align: 'right', width: 36 });
    doc.text(obj.row2[2], x + 72 - 10, y + 75, { align: 'right', width: 36 });
    doc.text(obj.row2[3], x + 108 - 10, y + 75, { align: 'right', width: 36 });
    doc.text(obj.row2[4], x + 144 - 10, y + 75, { align: 'right', width: 36 });
    doc.text(obj.row2[5], x + 180 - 10, y + 75, { align: 'right', width: 36 });
    doc.text(obj.row2[6], x + 216 - 10, y + 75, { align: 'right', width: 36 });

    doc.text(obj.row3[0], x + 0 - 10, y + 111, { align: 'right', width: 36 });
    doc.text(obj.row3[1], x + 36 - 10, y + 111, { align: 'right', width: 36 });
    doc.text(obj.row3[2], x + 72 - 10, y + 111, { align: 'right', width: 36 });
    doc.text(obj.row3[3], x + 108 - 10, y + 111, { align: 'right', width: 36 });
    doc.text(obj.row3[4], x + 144 - 10, y + 111, { align: 'right', width: 36 });
    doc.text(obj.row3[5], x + 180 - 10, y + 111, { align: 'right', width: 36 });
    doc.text(obj.row3[6], x + 216 - 10, y + 111, { align: 'right', width: 36 });

    doc.text(obj.row4[0], x + 0 - 10, y + 147, { align: 'right', width: 36 });
    doc.text(obj.row4[1], x + 36 - 10, y + 147, { align: 'right', width: 36 });
    doc.text(obj.row4[2], x + 72 - 10, y + 147, { align: 'right', width: 36 });
    doc.text(obj.row4[3], x + 108 - 10, y + 147, { align: 'right', width: 36 });
    doc.text(obj.row4[4], x + 144 - 10, y + 147, { align: 'right', width: 36 });
    doc.text(obj.row4[5], x + 180 - 10, y + 147, { align: 'right', width: 36 });
    doc.text(obj.row4[6], x + 216 - 10, y + 147, { align: 'right', width: 36 });

    doc.text(obj.row5[0], x + 0 - 10, y + 183, { align: 'right', width: 36 });
    doc.text(obj.row5[1], x + 36 - 10, y + 183, { align: 'right', width: 36 });
    doc.text(obj.row5[2], x + 72 - 10, y + 183, { align: 'right', width: 36 });
    doc.text(obj.row5[3], x + 108 - 10, y + 183, { align: 'right', width: 36 });
    doc.text(obj.row5[4], x + 144 - 10, y + 183, { align: 'right', width: 36 });
    doc.text(obj.row5[5], x + 180 - 10, y + 183, { align: 'right', width: 36 });
    doc.text(obj.row5[6], x + 216 - 10, y + 183, { align: 'right', width: 36 });

    doc.text(obj.row6[0], x + 0 - 10, y + 219, { align: 'right', width: 36 });
    doc.text(obj.row6[1], x + 36 - 10, y + 219, { align: 'right', width: 36 });
    doc.text(obj.row6[2], x + 72 - 10, y + 219, { align: 'right', width: 36 });
    doc.text(obj.row6[3], x + 108 - 10, y + 219, { align: 'right', width: 36 });
    doc.text(obj.row6[4], x + 144 - 10, y + 219, { align: 'right', width: 36 });
    doc.text(obj.row6[5], x + 180 - 10, y + 219, { align: 'right', width: 36 });
    doc.text(obj.row6[6], x + 216 - 10, y + 219, { align: 'right', width: 36 });
}

function addAreas() {

    doc.rect(1296, 36, 540, 792).stroke(1);

    doc.fontSize(16);
    doc.font('Helvetica');
    doc.fillColor(barColor);
    doc.text('7.5 x 11 Art, Photo or Ad goes here', 1296, 300, { width: 540, height: 792, align: 'center' });

}