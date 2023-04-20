"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function esMultiplo(dividendo, divisor) {
    return ((dividendo % divisor) == 0);
}
var numero1 = rls.questionInt("Ingrese un Numero: ");
var numero2 = rls.questionInt("Ingrese otro Numero: ");
if (esMultiplo(numero1, numero2)) {
    console.log("El Numero", numero1, "ES multiplo de", numero2);
}
else {
    console.log("El Numero", numero1, "NO es multiplo de", numero2);
}
