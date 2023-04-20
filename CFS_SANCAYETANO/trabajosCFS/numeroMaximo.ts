/*Encontrar el Número Máximo:*/


import * as rls from "readline-sync";

let nro , nroMaximo: number;
nro = rls.questionInt("Ingrese un nro: ");
nroMaximo = nro;
 
while (nro != 0) {
    nro = rls.questionInt("Ingrese nro: ");
    if  (nro > nroMaximo) {
        nroMaximo = nro
    }
}

console.log("El Numero Maximo es: ", nroMaximo);