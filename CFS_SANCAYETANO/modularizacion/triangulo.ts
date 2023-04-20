import * as rls from "readline-sync"

function calcularAreaTriangulo(base:number,altura:number) : number {
    return(base * altura)/2;

}
function calculandoTriangulos() {
    let resultado : number = calcularAreaTriangulo(1,2);
    console.log("El resultado es: ",resultado);
    resultado = calcularAreaTriangulo(2,4);
    console.log("El resultado es: ",resultado);
    resultado = calcularAreaTriangulo(3,6);
    console.log("El resultado es: ",resultado);
    resultado = calcularAreaTriangulo(4,8);
    console.log("El resultado es: ",resultado);}
calculandoTriangulos();