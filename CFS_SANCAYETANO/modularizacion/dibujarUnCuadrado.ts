
let moverAdelante;
let girarADerecha;

function dibujarUnCuadrado (){
    for (let i: number= 0; i <4; i++){
        moverAdelante(100);
        girarADerecha(90);
    }
}

console.log(dibujarUnCuadrado);