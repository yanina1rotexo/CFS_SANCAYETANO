"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
var alturaPersona = readlinesync.questionFloat("por favor indique la altura");
var alturaMin = 1.30;
if (function (alturaPersona) { return alturaMin; }) {
    console.log("tiene la altura adecuada");
}
else {
    console.log("no tiene la altura adecuada");
}
console.log("ultima linea del programa");
