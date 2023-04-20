import * as readlineSync from "readline-sync";

let num1: number = readlineSync.questionInt("ingrese el numero que quiere multiplicar");
let num2: number = readlineSync.questionInt("ingrese hasta que numero quiere multiplicar");


for(let i: number = 1; i <= num2; i++){
    let result: number = num1 * i;
    console.log(`${num1} * ${i} = ${result}`);
}

