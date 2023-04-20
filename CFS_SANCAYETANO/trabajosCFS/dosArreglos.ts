import * as rls from "readline-sync";
let nombres : string[] = new Array(2)
let numeros : number[] = new Array(3)
 
for(let i = 0; i < nombres.length;i++){
    nombres[i] = rls.question("nombre..." );
} for (let i = 0; i < numeros.length;i++){
    numeros[i] = rls.questionInt("numero...")
}

console.log(nombres, numeros);