"use strict";
exports.__esModule = true;
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function calculandoTriangulos() {
    var resultado = calcularAreaTriangulo(1, 2);
    console.log("El resultado es: ", resultado);
    resultado = calcularAreaTriangulo(2, 4);
    console.log("El resultado es: ", resultado);
    resultado = calcularAreaTriangulo(3, 6);
    console.log("El resultado es: ", resultado);
    resultado = calcularAreaTriangulo(4, 8);
    console.log("El resultado es: ", resultado);
}
calculandoTriangulos();
