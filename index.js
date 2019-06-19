let cal = require('./calendar');
const fs = require('fs');
const pdfDoc = require('pdfkit');


const year = process.argv[2];
const barColor = process.argv[3] || 'silver';
const monthColor = process.argv[4] || 'black';
const textColor = process.argv[5] || 'black';

const doc = new pdfDoc({ autoFirstPage: false });

doc.addPage({
    size: [864, 1872],
    margin: 0
})


renderYear();
renderMonth(cal.generateMonth(1, year), 27, 792);
renderMonth(cal.generateMonth(2, year), 306, 792);
renderMonth(cal.generateMonth(3, year), 585, 792);
renderMonth(cal.generateMonth(4, year), 27, 792 + 288);
renderMonth(cal.generateMonth(5, year), 306, 792 + 288);
renderMonth(cal.generateMonth(6, year), 585, 792 + 288);
renderMonth(cal.generateMonth(7, year), 27, 792 + (288 * 2));
renderMonth(cal.generateMonth(8, year), 306, 792 + (288 * 2));
renderMonth(cal.generateMonth(9, year), 585, 792 + (288 * 2));
renderMonth(cal.generateMonth(10, year), 27, 792 + (288 * 3));
renderMonth(cal.generateMonth(11, year), 306, 792 + (288 * 3));
renderMonth(cal.generateMonth(12, year), 585, 792 + (288 * 3));
// renderMonth(cal.generateMonth(2, 2020));

writeToFile();




function renderYear() {
    doc.fillColor(barColor);
    doc.fontSize(100);
    doc.font('Helvetica-Bold');
    doc.text(`${year}`, 0, 72 * 9 - 27, {
        width: 864,
        align: 'center'
    });
}

function writeToFile() {
    doc.pipe(fs.createWriteStream(`${year}_Calendar12x26.pdf`)); // write to PDF
    doc.end();
}

function renderMonth(obj, x, y) {


    doc.rect(x, y - 69, 252, 27).fillAndStroke(barColor);

    doc.fillColor(monthColor);
    doc.font('Helvetica-Bold');
    doc.fontSize(24);
    doc.text(obj.month.toUpperCase(), x, y - 64, { align: 'center', width: 252, height: 32 });

    doc.fillColor(textColor);
    doc.fontSize(10);
    doc.font('Helvetica');
    doc.text('S', x + 0 - 10, y - 30, { align: 'right', width: 36 });
    doc.text('M', x + 36 - 10, y - 30, { align: 'right', width: 36 });
    doc.text('T', x + 72 - 10, y - 30, { align: 'right', width: 36 });
    doc.text('W', x + 108 - 10, y - 30, { align: 'right', width: 36 });
    doc.text('T', x + 144 - 10, y - 30, { align: 'right', width: 36 });
    doc.text('F', x + 180 - 10, y - 30, { align: 'right', width: 36 });
    doc.text('S', x + 216 - 10, y - 30, { align: 'right', width: 36 });

    doc.fontSize(18);
    doc.text(obj.row1[0], x + 0 - 10, y, { align: 'right', width: 36 });
    doc.text(obj.row1[1], x + 36 - 10, y, { align: 'right', width: 36 });
    doc.text(obj.row1[2], x + 72 - 10, y, { align: 'right', width: 36 });
    doc.text(obj.row1[3], x + 108 - 10, y, { align: 'right', width: 36 });
    doc.text(obj.row1[4], x + 144 - 10, y, { align: 'right', width: 36 });
    doc.text(obj.row1[5], x + 180 - 10, y, { align: 'right', width: 36 });
    doc.text(obj.row1[6], x + 216 - 10, y, { align: 'right', width: 36 });

    doc.text(obj.row2[0], x + 0 - 10, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[1], x + 36 - 10, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[2], x + 72 - 10, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[3], x + 108 - 10, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[4], x + 144 - 10, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[5], x + 180 - 10, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[6], x + 216 - 10, y + 36, { align: 'right', width: 36 });

    doc.text(obj.row3[0], x + 0 - 10, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[1], x + 36 - 10, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[2], x + 72 - 10, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[3], x + 108 - 10, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[4], x + 144 - 10, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[5], x + 180 - 10, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[6], x + 216 - 10, y + 72, { align: 'right', width: 36 });

    doc.text(obj.row4[0], x + 0 - 10, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[1], x + 36 - 10, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[2], x + 72 - 10, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[3], x + 108 - 10, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[4], x + 144 - 10, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[5], x + 180 - 10, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[6], x + 216 - 10, y + 108, { align: 'right', width: 36 });

    doc.text(obj.row5[0], x + 0 - 10, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[1], x + 36 - 10, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[2], x + 72 - 10, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[3], x + 108 - 10, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[4], x + 144 - 10, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[5], x + 180 - 10, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[6], x + 216 - 10, y + 144, { align: 'right', width: 36 });

    doc.text(obj.row6[0], x + 0 - 10, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[1], x + 36 - 10, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[2], x + 72 - 10, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[3], x + 108 - 10, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[4], x + 144 - 10, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[5], x + 180 - 10, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[6], x + 216 - 10, y + 180, { align: 'right', width: 36 });


}