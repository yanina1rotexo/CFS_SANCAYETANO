"use strict";
exports.__esModule = true;
/*let numeroIngresado, negativos, positivos: number
numeroIngresado = readlineSync.questionFloat("ingrese un numero");
negativos = -15;
positivos = 0;
let suma: number = 0;
let multiplicaciion: number = 0;

while(numeroIngresado != 0){
    numeroIngresado = readlineSync.questionFloat("ingrese un numero ");
     if(numeroIngresado > positivos && numeroIngresado != 0){
        positivos = positivos + 1;
     }if(numeroIngresado < negativos && numeroIngresado != 0){
        negativos = negativos + 1
     } if(numeroIngresado ==0){
        suma = negativos + positivos;
        multiplicaciion - (positivos * 100) / suma;
        console.log(positivos, "son mayores a 0 y el", multiplicaciion, "% son positivos");
     }
}*/
/*Encontrar el Número Máximo:*/
var rls = require("readline-sync");
var nro, nroMaximo;
nro = rls.questionInt("Ingrese un nro: ");
nroMaximo = nro;
while (nro != 0) {
    nro = rls.questionInt("Ingrese nro: ");
    if (nro > nroMaximo) {
        nroMaximo = nro;
    }
}
console.log("El Numero Maximo es: ", nroMaximo);
