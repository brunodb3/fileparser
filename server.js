// server.js
// ------------------------------------------
// This file contains the logic to parse files to JSON (.pdf, .xlsx, etc.)

// Importing modules
var XLSX = require('xlsx'),
    path = require('path'),
    PDFParser = require('pdf2json');

Utils = require('./utils');

// Arguments passed on the command line
var args = process.argv.slice(2);

// Checks if the user sent a file as param
if (!args[0]) {
    throw new Error('You need to specify a filename as argument');
}

var fileExtension = path.extname(args[0]);
var baseName = path.basename(args[0], fileExtension);

console.log('OPENING FILE ' + baseName + fileExtension);

// Checks which file extension it is
switch (fileExtension) {
    case '.pdf':
        // Handle PDF file
        parsePdf(args[0]);
        break;
    default:
        // Default is Excel file
        parseExcel(args[0]);
        break;
}

// Functions
// Parses any pdf file
function parsePdf(filename) {
    var pdfParser = new PDFParser();

    // Error event
    pdfParser.on('pdfParser_dataError', function (err) {
        console.log(err.parserError);
    });

    // Success event
    pdfParser.on('pdfParser_dataReady', function (pdfData) {
        // Output file as JSON
        var outputJson = Utils.removeDiacritics(JSON.stringify(pdfData.formImage.Pages[0].Texts, null, 2));

        // Check if user wants to write into a JSON file
        if (args[1]) {
            Utils.writeToJson(baseName, outputJson);
        } else {
            console.log(outputJson);
        }
    });

    // Loads the PDF file into the parser
    pdfParser.loadPDF("./input_files/" + filename);
}

// Parses any excel file
function parseExcel(filename) {
    // Reading the file
    var workbook = XLSX.readFile("./input_files/" + filename);

    // Excel file
    var firstSheet = workbook.SheetNames[0];
    // Worksheet from file
    var worksheet = workbook.Sheets[firstSheet];

    // Output file as JSON
    var outputJson = Utils.removeDiacritics(JSON.stringify(XLSX.utils.sheet_to_row_object_array(worksheet), null, 2));

    // Check if user wants to write into a JSON file
    if (args[1]) {
        Utils.writeToJson(baseName, outputJson);
    } else {
        console.log(outputJson);
    }
}
