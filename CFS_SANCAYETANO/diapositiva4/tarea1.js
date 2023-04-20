"use strict";
/*let cantHolas: number = 1;

while (cantHolas <= 5) {
    console.log("HOLA");
    console.log("cantHolas en la interacion actual: ", cantHolas);
    cantHolas = cantHolas + 1;
}*/
exports.__esModule = true;
var readlineSync = require("readline-sync");
/*let nota, suma, promedio, contador, cantNotas : number
let contado = 1;
suma  = 0;
cantNotas = 5;

while (contador <= 10 ) {
    nota= readlineSync.questionInt("ingrese una nota: ");
    suma = suma + nota
    //console.log("iteracion nro: ", contador, "valor parcial de la suma: ", suma);
    contador = contador + 1
}

promedio = suma / 10;
console.log("el promedio de tus notas es: ", promedio);*/
/*mientra el colectivo no esta que siga si no me subo*/
var llegoColectivo = readlineSync.question("esta viniendo el colectivo?");
//Asumamos que el usuario solo puede ingresar "S" para si o "N" para no.
while (llegoColectivo == "N") {
    console.log("sigo esperando el colectivo");
    llegoColectivo = readlineSync.question("ya vino el colectivo?");
}
console.log("llego el colectivio");
