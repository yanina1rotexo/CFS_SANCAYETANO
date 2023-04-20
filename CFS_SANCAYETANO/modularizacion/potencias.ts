import * as rls from "readline-sync"

/*let base: number = rls.questionInt("ingrese la base: ");
let exponente: number = rls.questionInt("ingrese el exponente: ");
let result: number

console.log(Math.pow(base, exponente) );*/


//Otra opcion

//Función que calcula la potencia de una base (b) elevado al exponente (e)
function calcularPotencia(b:number, e:number): number {
    let i: number;
    let calculoParcial: number = 1;
    if (e == 0) {
        return 1;
    } else {
        for (i = 1; i <= e; i++) {
            calculoParcial = (calculoParcial * b);
        }
        return calculoParcial;
    }
}
let base : number = rls.questionInt("Ingrese Base: ");
let exponente : number = rls.questionInt("Ingrese Exponente: ");
if (exponente >= 0) {
    console.log("El resultado es:",calcularPotencia(base,exponente));
} else {
    console.log("El exponente",exponente, "no está admitido");
}
