var texto = document.getElementById("cliente_lineas");
var boton = document.getElementById("cliente_iniciar");
var borrado = document.getElementById("cliente_borrar");
boton.addEventListener("click", dibujocliente);
borrado.addEventListener("click",dibujoborrar);

var d = document.getElementById("dibujo1");
var ancho = d.width;
var lienzo = d.getContext("2d");
lienzo.fillStyle = "black";
lienzo.fillRect(0, 0, d.width, d.height);
var colorlinea = "#FAA";

dibujarLinea(colorlinea,1,1,1,ancho-1);
dibujarLinea(colorlinea,1,ancho-1,ancho-1,ancho-1);
dibujarLinea(colorlinea,1,1,ancho-1,1);
dibujarLinea(colorlinea,ancho-1,1,ancho-1,ancho-1);

function dibujarLinea(color, inicio_x, inicio_y, final_x, final_y) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(inicio_x,inicio_y);
    lienzo.lineTo(final_x,final_y);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujocliente(){
    var numerolineas = parseInt(texto.value);
    var espacio = ancho / numerolineas;
    // variable++ o ++variable incrementa la variable en 1, aunque son distintas si se imprime el valor
    // En JS se lee primero todo el código y se guardan las funciones. Por eso se puede usar la función antes de definirla
    for(limite = 0; limite < numerolineas; ++limite) {
        let xi = limite*espacio;
        let yf = (limite+1)*espacio;
        dibujarLinea(colorlinea,xi,0,ancho,yf);
    }
    for(limite = 0; limite < numerolineas; ++limite) {
        let yi = limite*espacio;
        let xf = (limite+1)*espacio;
        dibujarLinea(colorlinea,0,yi,xf,ancho);
    }
    alert("Dibujo completado :)");
}

function dibujoborrar(){
    lienzo.clearRect(0,0, d.width, d.height);
    lienzo.fillStyle = "black";
    lienzo.fillRect(0, 0, d.width, d.height);
    dibujarLinea(colorlinea,1,1,1,ancho-1);
    dibujarLinea(colorlinea,1,ancho-1,ancho-1,ancho-1);
    dibujarLinea(colorlinea,1,1,ancho-1,1);
    dibujarLinea(colorlinea,ancho-1,1,ancho-1,ancho-1);
}