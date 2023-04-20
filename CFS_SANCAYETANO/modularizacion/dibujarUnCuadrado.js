var moverAdelante;
var girarADerecha;
function dibujarUnCuadrado() {
    for (var i = 0; i < 4; i++) {
        moverAdelante(100);
        girarADerecha(90);
    }
}
console.log(dibujarUnCuadrado);
