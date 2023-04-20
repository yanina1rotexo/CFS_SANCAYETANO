import * as rls from "readline-sync";
const months:string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const monthNumber: number = rls.questionInt("numero de mes(solo del 1 al 12): ");
console.log(months[monthNumber - 1]);

/*const names: string[] = ["enzo", "virginia","seba","nico"];
console.log(names[2]);
console.log(names[names.length - 1 ])*/