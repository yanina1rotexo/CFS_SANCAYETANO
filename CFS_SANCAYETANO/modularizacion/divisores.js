"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Función que verifica si un número (dividendo) es múltiplo de otro (divisor)
function esMultiplo(dividendo, divisor) {
    return ((dividendo % divisor) == 0);
}
//Función que determina la cantidad de divisores que tiene un número (nro)
function cantidadDeDivisores(nro) {
    var i;
    var cantidad = 0;
    for (i = 1; i <= nro; i++) {
        if (esMultiplo(nro, i)) {
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}
var numero = rls.questionInt("Ingrese un Numero: ");
console.log("La cantidad de divisores del Numero", numero, "es", cantidadDeDivisores(numero));
