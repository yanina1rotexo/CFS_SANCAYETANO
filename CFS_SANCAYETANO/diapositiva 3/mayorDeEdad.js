"use strict";
// // Ejercicios de operadores logicos (IF, ELSE)
exports.__esModule = true;
var readlineSync = require("readline-Sync");
// let edadUsuario : number = readlineSync.questionInt("escriba el numero que desea verificar si es mayor o igual a 18");
//  console.log("La edad del usuario es: ", edadUsuario);
//  if (edadUsuario >= 18) {
//      console.log("el usuario es mayor de edad")} 
//      else {
//         console.log("el usuario es menos de edad")
// }
// console.log("ultima linea de programa");
//ejercicio aplicar descuento
var precioFinal = 0;
var precioProductoUno = 200;
var precioProductoDos = 350;
var subTotal = 0;
var cantidadDeProductoUno = readlineSync.questionInt("cantidad de producto 1 que compro el usuario");
var cantididadProductoDos = readlineSync.questionInt("cantidad de producto 2 que compro el usuario");
console.log(cantidadDeProductoUno);
console.log(cantididadProductoDos);
subTotal = (cantidadDeProductoUno * precioProductoUno) + (cantididadProductoDos * precioProductoDos);
console.log("el usuario compro ", cantidadDeProductoUno, "cantidad de producto 1.", "el usuario compro ", cantididadProductoDos, "cantidad de producto 2", "el subtotal es de: ", subTotal);
