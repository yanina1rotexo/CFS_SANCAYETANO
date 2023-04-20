/*• Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por el usuario)*/

import * as rls from "readline-sync"
let dados= rls.questionInt ("ingrese cantidad de dados: ");
let result =0;
let casosposibles= Math.pow(6,dados);
let casosfavorables=1;
result=casosfavorables/casosposibles
console.log (result)