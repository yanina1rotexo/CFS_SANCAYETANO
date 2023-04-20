import * as rls from "readline-sync"
 //Función que verifica si un número (dividendo) es múltiplo de otro (divisor)
function esMultiplo(dividendo:number, divisor:number) : boolean {
    return ((dividendo % divisor) == 0);
}
//Función que determina la cantidad de divisores que tiene un número (nro)
function cantidadDeDivisores(nro: number) : number {
    let i: number;
    let cantidad: number = 0;
    for (i = 1; i <= nro; i++) {
        if (esMultiplo(nro,i)) {
            cantidad = cantidad + 1;
        }
    }
return cantidad;
}
let numero : number = rls.questionInt("Ingrese un Numero: ");
console.log("La cantidad de divisores del Numero",numero, "es",cantidadDeDivisores(numero));







