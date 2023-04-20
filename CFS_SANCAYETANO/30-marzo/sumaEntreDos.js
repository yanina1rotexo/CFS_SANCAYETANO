"use strict";
/*Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27*/
exports.__esModule = true;
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("ingrese el primer numero : ");
var num2 = readlineSync.questionInt("ingrese el segundo numero : ");
var result = 0;
for (var i = num1; i <= num2; i++) {
    result = result + i;
}
console.log(result);
