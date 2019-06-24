let cal = require('../calendar');
const fs = require('fs');
const pdfDoc = require('pdfkit');


const gridColor = 'silver';
const year = process.argv[2];
const barColor = process.argv[3] || 'silver';
const monthColor = process.argv[4] || 'black';
const textColor = process.argv[5] || 'black';

const doc = new pdfDoc({ autoFirstPage: false });

doc.addPage({
    size: [792, 612],
    margin: 0
});

doc.fontSize(200);
doc.text(`${year}`, 0, 288, { width: 792, align: 'center' });

for (let i = 0; i < 12; i++) {
    doc.addPage({
        size: [792, 612],
        margin: 0
    });

    doc.image('images/photos.png', 90);

    doc.addPage({
        size: [792, 612],
        margin: 0
    });

    layoutDates(cal.generateMonth(i + 1, year), 36, 108);
}


doc.addPage({
    size: [792, 612],
    margin: 0
});

doc.fontSize(100);
doc.text(`BACK COVER`, 0, 288, { width: 792, align: 'center' });

writeToFile();


function writeToFile() {
    doc.pipe(fs.createWriteStream(`${year}BookletCalendar.pdf`)); // write to PDF
    doc.end();
}


function grid(x, y, height) {

    let width = 102.857142857142857;
    doc.strokeColor(gridColor);

    doc.rect(x, y, width, height).stroke(1);
    doc.rect(x + width, y, width, height).stroke(1);
    doc.rect(x + (width * 2), y, width, height).stroke(1);
    doc.rect(x + (width * 3), y, width, height).stroke(1);
    doc.rect(x + (width * 4), y, width, height).stroke(1);
    doc.rect(x + (width * 5), y, width, height).stroke(1);
    doc.rect(x + (width * 6), y, width, height).stroke(1);

}

function layoutDates(obj, x, y) {
    const drawRow6 = (obj.row6[0] == ' ') ? true : false;
    const height = (drawRow6) ? 86.4 : 72
    let width = 102.857142857142857;

    drawGrid(drawRow6);
    drawMonthAndYear(obj);
    drawDays(x);

    // draw dates
    doc.fontSize(24);
    doc.text(obj.row1[0], x - 10, 118, { width: width, align: 'right' })
    doc.text(obj.row1[1], x - 10 + width, 118, { width: width, align: 'right' });
    doc.text(obj.row1[2], x - 10 + (width * 2), 118, { width: width, align: 'right' });
    doc.text(obj.row1[3], x - 10 + (width * 3), 118, { width: width, align: 'right' });
    doc.text(obj.row1[4], x - 10 + (width * 4), 118, { width: width, align: 'right' });
    doc.text(obj.row1[5], x - 10 + (width * 5), 118, { width: width, align: 'right' });
    doc.text(obj.row1[6], x - 10 + (width * 6), 118, { width: width, align: 'right' });

    doc.text(obj.row2[0], x - 10, 118 + height, { width: width, align: 'right' })
    doc.text(obj.row2[1], x - 10 + width, 118 + height, { width: width, align: 'right' });
    doc.text(obj.row2[2], x - 10 + (width * 2), 118 + height, { width: width, align: 'right' });
    doc.text(obj.row2[3], x - 10 + (width * 3), 118 + height, { width: width, align: 'right' });
    doc.text(obj.row2[4], x - 10 + (width * 4), 118 + height, { width: width, align: 'right' });
    doc.text(obj.row2[5], x - 10 + (width * 5), 118 + height, { width: width, align: 'right' });
    doc.text(obj.row2[6], x - 10 + (width * 6), 118 + height, { width: width, align: 'right' });

    doc.text(obj.row3[0], x - 10, 118 + height * 2, { width: width, align: 'right' })
    doc.text(obj.row3[1], x - 10 + width, 118 + height * 2, { width: width, align: 'right' });
    doc.text(obj.row3[2], x - 10 + (width * 2), 118 + height * 2, { width: width, align: 'right' });
    doc.text(obj.row3[3], x - 10 + (width * 3), 118 + height * 2, { width: width, align: 'right' });
    doc.text(obj.row3[4], x - 10 + (width * 4), 118 + height * 2, { width: width, align: 'right' });
    doc.text(obj.row3[5], x - 10 + (width * 5), 118 + height * 2, { width: width, align: 'right' });
    doc.text(obj.row3[6], x - 10 + (width * 6), 118 + height * 2, { width: width, align: 'right' });

    doc.text(obj.row4[0], x - 10, 118 + height * 3, { width: width, align: 'right' })
    doc.text(obj.row4[1], x - 10 + width, 118 + height * 3, { width: width, align: 'right' });
    doc.text(obj.row4[2], x - 10 + (width * 2), 118 + height * 3, { width: width, align: 'right' });
    doc.text(obj.row4[3], x - 10 + (width * 3), 118 + height * 3, { width: width, align: 'right' });
    doc.text(obj.row4[4], x - 10 + (width * 4), 118 + height * 3, { width: width, align: 'right' });
    doc.text(obj.row4[5], x - 10 + (width * 5), 118 + height * 3, { width: width, align: 'right' });
    doc.text(obj.row4[6], x - 10 + (width * 6), 118 + height * 3, { width: width, align: 'right' });

    doc.text(obj.row5[0], x - 10, 118 + height * 4, { width: width, align: 'right' })
    doc.text(obj.row5[1], x - 10 + width, 118 + height * 4, { width: width, align: 'right' });
    doc.text(obj.row5[2], x - 10 + (width * 2), 118 + height * 4, { width: width, align: 'right' });
    doc.text(obj.row5[3], x - 10 + (width * 3), 118 + height * 4, { width: width, align: 'right' });
    doc.text(obj.row5[4], x - 10 + (width * 4), 118 + height * 4, { width: width, align: 'right' });
    doc.text(obj.row5[5], x - 10 + (width * 5), 118 + height * 4, { width: width, align: 'right' });
    doc.text(obj.row5[6], x - 10 + (width * 6), 118 + height * 4, { width: width, align: 'right' });

    doc.text(obj.row6[0], x - 10, 118 + height * 5, { width: width, align: 'right' })
    doc.text(obj.row6[1], x - 10 + width, 118 + height * 5, { width: width, align: 'right' });
    doc.text(obj.row6[2], x - 10 + (width * 2), 118 + height * 5, { width: width, align: 'right' });
    doc.text(obj.row6[3], x - 10 + (width * 3), 118 + height * 5, { width: width, align: 'right' });
    doc.text(obj.row6[4], x - 10 + (width * 4), 118 + height * 5, { width: width, align: 'right' });
    doc.text(obj.row6[5], x - 10 + (width * 5), 118 + height * 5, { width: width, align: 'right' });
    doc.text(obj.row6[6], x - 10 + (width * 6), 118 + height * 5, { width: width, align: 'right' });

    drawFooter();
}

function drawDays(x) {

    doc.fontSize(12);
    let width = 102.857142857142857;
    let y = 90;

    doc.text('SUNDAY', x, y, { width: width, align: 'center' })
    doc.text('MONDAY', x + width, y, { width: width, align: 'center' });
    doc.text('TUESDAY', x + (width * 2), y, { width: width, align: 'center' });
    doc.text('WEDNESDAY', x + (width * 3), y, { width: width, align: 'center' });
    doc.text('THURSDAY', x + (width * 4), y, { width: width, align: 'center' });
    doc.text('FRIDAY', x + (width * 5), y, { width: width, align: 'center' });
    doc.text('SATURDAY', x + (width * 6), y, { width: width, align: 'center' });

}


function drawGrid(row6IsEmpty) {
    let height = (row6IsEmpty) ? 86.4 : 72
    grid(36, 108, height);
    grid(36, 108 + height, height);
    grid(36, 108 + (height * 2), height);
    grid(36, 108 + (height * 3), height);
    grid(36, 108 + (height * 4), height);

    if (!row6IsEmpty) {
        grid(36, 108 + (height * 5), height);
    }
}

function drawMonthAndYear(obj) {
    doc.fontSize(50);
    doc.text(`${obj.month.toUpperCase()}`, 36, 36, {
        width: 720,
        height: 72,
        align: 'center'
    });

    doc.text(`${obj.year}`, 36, 36, {
        width: 720,
        height: 72,
        align: 'right'
    });
}

function drawFooter() {
    doc.fontSize(14);
    doc.rect(36, 540, 720, 36).fillAndStroke('silver');
    doc.fill('white');
    doc.text('{{ footer area }}', 36, 540 + 9, { width: 720, height: 36, align: 'center' });
}