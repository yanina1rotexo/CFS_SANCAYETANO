 import * as readlineSync from "readline-sync";

 /*const user: string = "juan@gmail.com";
 const password: string = "clavejuan"; 
 let login = readlineSync.questionEMail ("ingrese user")
 let contraseña = readlineSync.questionNewPassword ("ingrese contraseña ");

 if (user == "juan@gmail.com" && password == "claveJuan") {
     console.log ("ingresa")}

      else console.log ("password y user no coinsiden)")*/
     
// competidor, medalla

// let posicionLlegada : number = readlineSync.questionInt("ingrese la posicion de llegada del competidor: ");

// if (posicionLlegada ==1) {
//     console.log("entregar medalla de oro");
// } else {
//     if (posicionLlegada ==2) {
//         console.log("entregar medalla de plata");
//     } else {
//         if (posicionLlegada ==3) {
//             console.log("entregar medalla de bronce");
//         } else {
//             console.log("entregar mencion de participacion");
//         }
//     }
// }

/*•Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres*/

let num1 : number = readlineSync.questionInt("ingrese el primer numero: ");
let num2 : number = readlineSync.questionInt("ingrese el segundo numero: ");
let num3 : number = readlineSync.questionInt("ingrese el tercer numero: ");

if (num1 > num2 && num1 > num3) {
    console.log("el numero mas grande es ", num1);
} else if (num2 > num1 && num2 > num3){
    console.log("el numero mas grande es ", num2);
} else { console.log ("el numero mas grande es: ", num3);
}


