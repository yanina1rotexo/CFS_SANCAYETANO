// Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a
// entregar.
// Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla
// de plata y tercer puesto medalla de bronce. En caso que quede en otra posición se entrega
// certificado de participación


 import * as readlineSync from "readline-sync";
const  position: number = readlineSync.questionInt("ingrese la posicion de llegada");
let message:string = ""

switch(position){
case 1
    message = "medalla de oro";
    break;
case 2
    message = "medalla de plata";
case 3
    message = "medalla de bronce";
default
    message = "certificado de participacion";
    

}


/*if(position ===1) {
    message = "medalla de oro";
} else if(position ===2){
    message = "medalla de plata";
} else if(position ===3) {
    message = "medalla de bronce";
} else {
    message = "certificado de participacion";
}

console.log(message);

/*
haremos lo mismo con un switch/case */
