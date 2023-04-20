import * as rls from "readline-sync";

const arrDim : number = rls.questionInt("dimencion del arreglo?");
let names:string[] = new Array(arrDim);
//console.log(names.length)
for(let i = 0; i < names.length;i++ ) {
    names[i] = rls.question("nombre... ");
}