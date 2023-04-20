"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var monthNumber = rls.questionInt("numero de mes(solo del 1 al 12): ");
console.log(months[monthNumber - 1]);
/*const names: string[] = ["enzo", "virginia","seba","nico"];
console.log(names[2]);
console.log(names[names.length - 1 ])*/ 
