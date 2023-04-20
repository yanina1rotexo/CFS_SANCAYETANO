import * as readlineSync from "readline-sync";
/*let num : number = readlineSync.questionInt("ingrese numero: ");

if (num == 0) {
    console.log("el numero es cero");
} else if (num % 2 == 0) {
    console.log("el numero", num , "el par");
}
else {
    console.log("el numero",num, "es impar");
}
*/

/*Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:*/

let sueldo: number = readlineSync.questionFloat("sueldo del empleado");

if (sueldo < 15000) {
    console.log("sueldo con aumento", sueldo *1.20);
} else if (sueldo > 15001 && sueldo < 2000) {
    console.log("sueldo con aumento", sueldo * 1.10);
    
} else if (sueldo > 20001 && sueldo < 25000) {
    console.log("sueldo con aumento", sueldo * 1.5);
} else (sueldo > 25000); {
    console.log("sueldo sin aumento", sueldo);
}