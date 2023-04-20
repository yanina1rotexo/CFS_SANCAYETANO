import * as rls from "readline-sync";
const precio:number = rls.questionfloat("ingrese precio del producto");
const porcentajeDescuento: number = 0.1;
const descuento: number = precio * porcentajeDescuento;
const precioConDescuento: number = precio - descuento:
console.log("el precio con descuento es: ",precioConDescuento);
