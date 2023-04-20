"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var arrDim = rls.questionInt("dimencion del arreglo?");
var names = new Array(arrDim);
//console.log(names.length)
for (var i = 0; i < names.length; i++) {
    names[i] = rls.question("nombre... ");
}
