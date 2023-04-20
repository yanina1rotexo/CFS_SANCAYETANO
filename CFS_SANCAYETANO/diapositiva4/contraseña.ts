import * as readlineSync from "readline-sync"

/*const password : string = "eureka";

let contrasena = readlineSync.question("ingrese su contrasena");

if (password == "eureka") {
    console.log("su contrseña es correcta");
} else if {
    console.log("su contraseña es incorrecata");
}*/

let password : string = "eureka";
let contrasena = readlineSync.question("ingrese su contraseña");

if (password === "eureka") {
    console.log("su contraseña es incorrecta");
    contrasena = readlineSync.question("ingrese su contrasena")
} else if (password === "eureka"){
    console.log("su contraseña es correcta");
} else {
    console.log("ingrese nuevamente su contraseña");
    contrasena = readlineSync.question("ingrese contraseña valida");
}