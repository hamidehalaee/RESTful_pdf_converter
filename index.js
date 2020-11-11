const PDFDocument = require('pdfkit');
const fs = require('fs');
// Create a document
const doc = new PDFDocument;

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream(`${Math.floor(Math.random() * 100) + 1 + "m" + ".pdf"}`));

// Embed a font, set the font size, and render some text
doc.fontSize(25)
   .text('Some text with an embedded font!', 100, 100);


// Add another page
doc.addPage()
   .fontSize(25)
   .text('add another page', 100, 100);

// Add some text with annotations
doc.addPage()
   .fillColor("blue")
   .text('Here is a link!', 100, 100)
  

// Finalize PDF file
doc.end();