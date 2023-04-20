"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("ingrese el numero que quiere multiplicar");
var num2 = readlineSync.questionInt("ingrese hasta que numero quiere multiplicar");
for (var i = 1; i <= num2; i++) {
    var result = num1 * i;
    console.log("".concat(num1, " * ").concat(i, " = ").concat(result));
}
