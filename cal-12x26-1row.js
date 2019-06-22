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

renderMonth(cal.generateMonth(1, year), 40, 144);
renderMonth(cal.generateMonth(2, year), 40, 784 + 144);
footer();

doc.addPage({
    size: [864, 1872],
    margin: 0
})

renderMonth(cal.generateMonth(3, year), 40, 144);
renderMonth(cal.generateMonth(4, year), 40, 784 + 144);
footer();

doc.addPage({
    size: [864, 1872],
    margin: 0
})

renderMonth(cal.generateMonth(5, year), 40, 144);
renderMonth(cal.generateMonth(6, year), 40, 784 + 144);
footer();

doc.addPage({
    size: [864, 1872],
    margin: 0
})

renderMonth(cal.generateMonth(7, year), 40, 144);
renderMonth(cal.generateMonth(8, year), 40, 784 + 144);
footer();

doc.addPage({
    size: [864, 1872],
    margin: 0
})

renderMonth(cal.generateMonth(9, year), 40, 144);
renderMonth(cal.generateMonth(10, year), 40, 784 + 144);
footer();

doc.addPage({
    size: [864, 1872],
    margin: 0
})

renderMonth(cal.generateMonth(11, year), 40, 144);
renderMonth(cal.generateMonth(12, year), 40, 784 + 144);
footer();



writeToFile();




function renderYear(obj, x, y) {
    doc.fillColor(monthColor);
    doc.font('Helvetica-Bold');
    doc.fontSize(50);
    doc.text(obj.year, x, y - 72, { align: 'right', width: 792 - 6 });
}

function writeToFile() {
    doc.pipe(fs.createWriteStream(`${year}_Calendar12x261Row.pdf`)); // write to PDF
    doc.end();
}

function renderGrid(x, y) {
    doc.rect(x, y, 112, 112).stroke(1);
    doc.rect(x + 112, y, 112, 112).stroke(1);
    doc.rect(x + (112 * 2), y, 112, 112).stroke(1);
    doc.rect(x + (112 * 3), y, 112, 112).stroke(1);
    doc.rect(x + (112 * 4), y, 112, 112).stroke(1);
    doc.rect(x + (112 * 5), y, 112, 112).stroke(1);
    doc.rect(x + (112 * 6), y, 112, 112).stroke(1);
}

function renderMonth(obj, x, y) {

    renderYear(obj, x, y);
    renderGrid(x, y);
    renderGrid(x, y + 112);
    renderGrid(x, y + 112 * 2);
    renderGrid(x, y + 112 * 3);
    renderGrid(x, y + 112 * 4);
    renderGrid(x, y + 112 * 5);

    doc.fillColor(monthColor);
    doc.font('Helvetica-Bold');
    doc.fontSize(50);
    doc.text(obj.month.toUpperCase(), x, y - 72, { align: 'left', width: 792 });

    doc.fillColor(textColor);
    doc.fontSize(15);
    doc.font('Helvetica');
    doc.text('SUNDAY', x + 0, y - 20, { align: 'center', width: 112 });
    doc.text('MONDAY', x + 112, y - 20, { align: 'center', width: 112 });
    doc.text('TUESDAY', x + (112 * 2), y - 20, { align: 'center', width: 112 });
    doc.text('WEDNESDAY', x + (112 * 3), y - 20, { align: 'center', width: 112 });
    doc.text('THURSDAY', x + (112 * 4), y - 20, { align: 'center', width: 112 });
    doc.text('FRIDAY', x + (112 * 5), y - 20, { align: 'center', width: 112 });
    doc.text('SATURDAY', x + (112 * 6), y - 20, { align: 'center', width: 112 });

    doc.fontSize(36);
    doc.text(obj.row1[0], x + 0 - 10, y + 10, { align: 'right', width: 112 });
    doc.text(obj.row1[1], x + 112 - 10, y + 10, { align: 'right', width: 112 });
    doc.text(obj.row1[2], x + (112 * 2) - 10, y + 10, { align: 'right', width: 112 });
    doc.text(obj.row1[3], x + (112 * 3) - 10, y + 10, { align: 'right', width: 112 });
    doc.text(obj.row1[4], x + (112 * 4) - 10, y + 10, { align: 'right', width: 112 });
    doc.text(obj.row1[5], x + (112 * 5) - 10, y + 10, { align: 'right', width: 112 });
    doc.text(obj.row1[6], x + (112 * 6) - 10, y + 10, { align: 'right', width: 112 });

    doc.text(obj.row2[0], x + 0 - 10, y + 122, { align: 'right', width: 112 });
    doc.text(obj.row2[1], x + 112 - 10, y + 122, { align: 'right', width: 112 });
    doc.text(obj.row2[2], x + (112 * 2) - 10, y + 122, { align: 'right', width: 112 });
    doc.text(obj.row2[3], x + (112 * 3) - 10, y + 122, { align: 'right', width: 112 });
    doc.text(obj.row2[4], x + (112 * 4) - 10, y + 122, { align: 'right', width: 112 });
    doc.text(obj.row2[5], x + (112 * 5) - 10, y + 122, { align: 'right', width: 112 });
    doc.text(obj.row2[6], x + (112 * 6) - 10, y + 122, { align: 'right', width: 112 });

    doc.text(obj.row3[0], x + 0 - 10, y + 234, { align: 'right', width: 112 });
    doc.text(obj.row3[1], x + 112 - 10, y + 234, { align: 'right', width: 112 });
    doc.text(obj.row3[2], x + (112 * 2) - 10, y + 234, { align: 'right', width: 112 });
    doc.text(obj.row3[3], x + (112 * 3) - 10, y + 234, { align: 'right', width: 112 });
    doc.text(obj.row3[4], x + (112 * 4) - 10, y + 234, { align: 'right', width: 112 });
    doc.text(obj.row3[5], x + (112 * 5) - 10, y + 234, { align: 'right', width: 112 });
    doc.text(obj.row3[6], x + (112 * 6) - 10, y + 234, { align: 'right', width: 112 });

    doc.text(obj.row4[0], x + 0 - 10, y + 346, { align: 'right', width: 112 });
    doc.text(obj.row4[1], x + 112 - 10, y + 346, { align: 'right', width: 112 });
    doc.text(obj.row4[2], x + (112 * 2) - 10, y + 346, { align: 'right', width: 112 });
    doc.text(obj.row4[3], x + (112 * 3) - 10, y + 346, { align: 'right', width: 112 });
    doc.text(obj.row4[4], x + (112 * 4) - 10, y + 346, { align: 'right', width: 112 });
    doc.text(obj.row4[5], x + (112 * 5) - 10, y + 346, { align: 'right', width: 112 });
    doc.text(obj.row4[6], x + (112 * 6) - 10, y + 346, { align: 'right', width: 112 });

    doc.text(obj.row5[0], x + 0 - 10, y + 458, { align: 'right', width: 112 });
    doc.text(obj.row5[1], x + 112 - 10, y + 458, { align: 'right', width: 112 });
    doc.text(obj.row5[2], x + (112 * 2) - 10, y + 458, { align: 'right', width: 112 });
    doc.text(obj.row5[3], x + (112 * 3) - 10, y + 458, { align: 'right', width: 112 });
    doc.text(obj.row5[4], x + (112 * 4) - 10, y + 458, { align: 'right', width: 112 });
    doc.text(obj.row5[5], x + (112 * 5) - 10, y + 458, { align: 'right', width: 112 });
    doc.text(obj.row5[6], x + (112 * 6) - 10, y + 458, { align: 'right', width: 112 });


    doc.text(obj.row6[0], x + 0 - 10, y + 570, { align: 'right', width: 112 });
    doc.text(obj.row6[1], x + 112 - 10, y + 570, { align: 'right', width: 112 });
    doc.text(obj.row6[2], x + (112 * 2) - 10, y + 570, { align: 'right', width: 112 });
    doc.text(obj.row6[3], x + (112 * 3) - 10, y + 570, { align: 'right', width: 112 });
    doc.text(obj.row6[4], x + (112 * 4) - 10, y + 570, { align: 'right', width: 112 });
    doc.text(obj.row6[5], x + (112 * 5) - 10, y + 570, { align: 'right', width: 112 });
    doc.text(obj.row6[6], x + (112 * 6) - 10, y + 570, { align: 'right', width: 112 });


}

function drawBoard() {
    doc.lineWidth(10);

    doc.rect(36, 180, 864 - 72, 1).stroke();
    doc.rect(36, 36, 864 - 72, (72 * 8) - 36).stroke();

    doc.save();
    doc.rect(864 - (146 + 5 + 36), 180 + 5, (72 * 3) - 70, 72 * 3).clip();
    doc.roundedRect(864 - (146 + 36), 180 - 36, 72 * 3, 72 * 3, 72 / 2).stroke();
}


function footer() {
    doc.rect(40, 1872 - (144 + 108), 792 - 6, 72 * 3).stroke(1);
}