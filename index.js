let cal = require('./calendar');
const fs = require('fs');
const pdfDoc = require('pdfkit');


const year = 2020;

const doc = new pdfDoc({
    size: [864, 1872],
    margin: 0
});




renderYear();
renderMonth(cal.generateMonth(1, 2020), 0, 792);
renderMonth(cal.generateMonth(2, 2020), 324 - 54, 792);
renderMonth(cal.generateMonth(3, 2020), 576 - 36, 792);
// renderMonth(cal.generateMonth(2, 2020));

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

function renderMonth(obj, x, y) {

    doc.fontSize(10);
    // doc.rect(x + 36, y - 36, 36, 36).stroke();
    doc.text('S', x + 36, y - 36, { align: 'right', width: 36 });
    doc.text('M', x + 72, y - 36, { align: 'right', width: 36 });
    doc.text('T', x + 108, y - 36, { align: 'right', width: 36 });
    doc.text('W', x + 144, y - 36, { align: 'right', width: 36 });
    doc.text('T', x + 180, y - 36, { align: 'right', width: 36 });
    doc.text('F', x + 216, y - 36, { align: 'right', width: 36 });
    doc.text('S', x + 252, y - 36, { align: 'right', width: 36 });

    doc.fontSize(18);

    doc.text(obj.row1[0], x + 36, y, { align: 'right', width: 36 });
    doc.text(obj.row1[1], x + 72, y, { align: 'right', width: 36 });
    doc.text(obj.row1[2], x + 108, y, { align: 'right', width: 36 });
    doc.text(obj.row1[3], x + 144, y, { align: 'right', width: 36 });
    doc.text(obj.row1[4], x + 180, y, { align: 'right', width: 36 });
    doc.text(obj.row1[5], x + 216, y, { align: 'right', width: 36 });
    doc.text(obj.row1[6], x + 252, y, { align: 'right', width: 36 });

    doc.text(obj.row2[0], x + 36, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[1], x + 72, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[2], x + 108, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[3], x + 144, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[4], x + 180, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[5], x + 216, y + 36, { align: 'right', width: 36 });
    doc.text(obj.row2[6], x + 252, y + 36, { align: 'right', width: 36 });

    doc.text(obj.row3[0], x + 36, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[1], x + 72, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[2], x + 108, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[3], x + 144, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[4], x + 180, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[5], x + 216, y + 72, { align: 'right', width: 36 });
    doc.text(obj.row3[6], x + 252, y + 72, { align: 'right', width: 36 });

    doc.text(obj.row4[0], x + 36, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[1], x + 72, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[2], x + 108, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[3], x + 144, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[4], x + 180, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[5], x + 216, y + 108, { align: 'right', width: 36 });
    doc.text(obj.row4[6], x + 252, y + 108, { align: 'right', width: 36 });

    doc.text(obj.row5[0], x + 36, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[1], x + 72, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[2], x + 108, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[3], x + 144, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[4], x + 180, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[5], x + 216, y + 144, { align: 'right', width: 36 });
    doc.text(obj.row5[6], x + 252, y + 144, { align: 'right', width: 36 });

    doc.text(obj.row6[0], x + 36, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[1], x + 72, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[2], x + 108, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[3], x + 144, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[4], x + 180, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[5], x + 216, y + 180, { align: 'right', width: 36 });
    doc.text(obj.row6[6], x + 252, y + 180, { align: 'right', width: 36 });


}