"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
/*let base: number = rls.questionInt("ingrese la base: ");
let exponente: number = rls.questionInt("ingrese el exponente: ");
let result: number

console.log(Math.pow(base, exponente) );*/
//Otra opcion
//Función que calcula la potencia de una base (b) elevado al exponente (e)
function calcularPotencia(b, e) {
    var i;
    var calculoParcial = 1;
    if (e == 0) {
        return 1;
    }
    else {
        for (i = 1; i <= e; i++) {
            calculoParcial = (calculoParcial * b);
        }
        return calculoParcial;
    }
}
var base = rls.questionInt("Ingrese Base: ");
var exponente = rls.questionInt("Ingrese Exponente: ");
if (exponente >= 0) {
    console.log("El resultado es:", calcularPotencia(base, exponente));
}
else {
    console.log("El exponente", exponente, "no está admitido");
}
