"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombres = new Array(2);
var numeros = new Array(3);
for (var i = 0; i < nombres.length; i++) {
    nombres[i] = rls.question("nombre...");
}
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = rls.questionInt("numero...");
}
console.log(nombres, numeros);
