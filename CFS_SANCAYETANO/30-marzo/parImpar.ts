/*Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se debe volver a pedir el número por
teclado (hasta que se ingrese unnúmero mayor que cero)*/

import * as readlineSync from "readline-sync"
let imputNum : number = 0
while(imputNum <= 0){
    imputNum = readlineSync.questionInt("ingrese un numero mayor que cero");

}

if (imputNum % 2 === 0){
    console.log("el numero es par");{
        
    } else {
        console.log("el numero es impar");
    }
    
}