/*Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27*/

import * as readlineSync from "readline-sync";
const num1: number = readlineSync.questionInt("ingrese el primer numero : ");
const num2: number = readlineSync.questionInt("ingrese el segundo numero : ");
let result: number = 0

for(let i: number = num1; i <= num2; i++){
result=result + i 
}
console.log(result);