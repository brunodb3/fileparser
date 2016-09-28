// utils.js
// ------------------------------------------
// Utilities module

// Importing modules
var fs = require('fs');

// Exporting the module (functions)
module.exports.writeToJson = writeToJson;
module.exports.getDateObject = getDateObject;

// Writes JSON into a file
function writeToJson(baseName, outputJson) {
    // var stringArray = [];
    var currentDate = getDateObject();
    var outputFilename = './output_files/' + currentDate.day + '_' + currentDate.month + '_' + baseName + '.json';

    // // Loops the pages on the PDF file
    // for (var i in pdfData.formImage.Pages) {
    //     var page = pdfData.formImage.Pages[i];

    //     // Loops the texts on each page
    //     for (var j in page.Texts) {
    //         var text = page.Texts[j];
    //         // Puts the texts on a string array
    //         stringArray.push(text.R[0].T);
    //     }
    // }

    // console.log(stringArray);

    // output JSON
    // var outputJson = JSON.stringify(pdfData.formImage.Pages[0].Texts, null, 2);

    fs.writeFile(outputFilename, outputJson, function (err) {
        if (err) {
            throw new Error('Error writing JSON file: ' + err);
        } else {
            console.log('JSON saved to ' + outputFilename);
        }
    });
}

// Returns the current date/time as object
function getDateObject() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    var returnObject = {
        day: day,
        min: min,
        sec: sec,
        hour: hour,
        year: year,
        month: month
    };

    return returnObject;
}