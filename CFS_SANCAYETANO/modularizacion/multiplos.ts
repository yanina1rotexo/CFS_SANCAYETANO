import * as rls from "readline-sync"

function esMultiplo(dividendo:number, divisor:number): boolean {
    return ((dividendo % divisor) == 0);
}
let numero1 : number = rls.questionInt("Ingrese un Numero: ");
let numero2 : number = rls.questionInt("Ingrese otro Numero: ");
if (esMultiplo(numero1, numero2)) {
    console.log("El Numero",numero1, "ES multiplo de",numero2);
} else {
    console.log("El Numero",numero1, "NO es multiplo de",numero2);
}