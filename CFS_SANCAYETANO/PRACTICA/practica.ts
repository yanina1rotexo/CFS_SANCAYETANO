import * as readlinesync from "readline-sync"

let alturaPersona: number = readlinesync.questionFloat("por favor indique la altura");
const alturaMin: number = 1.30;
if (alturaPersona => alturaMin) {
    console.log("tiene la altura adecuada");
} else {
    console.log("no tiene la altura adecuada");
}
console.log("ultima linea del programa");