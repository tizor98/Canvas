// Evento que detecta las teclas y aplica una función
document.addEventListener("keydown",dibujoTeclado);

// Trae el input del boton de reiniciar para agregar un evento que reinicia el dibujo
var volver = document.getElementById("reiniciarDibujo");
volver.addEventListener("click", dibujoborrar);

// Delimitación del canvas definido con HTML para dibujar
var d = document.getElementById("dibujo1");
var ancho = d.width;
var lienzo = d.getContext("2d");
lienzo.fillStyle = "black";
lienzo.fillRect(0, 0, d.width, d.height);
var colorlinea = "#FAA";

// Valores para que el usuario dibuje
var ultimoPunto = [150,150];
const teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};

// Dibuja las líneas exteriores
dibujarLinea(colorlinea,1,1,1,ancho-1);
dibujarLinea(colorlinea,1,ancho-1,ancho-1,ancho-1);
dibujarLinea(colorlinea,1,1,ancho-1,1);
dibujarLinea(colorlinea,ancho-1,1,ancho-1,ancho-1);

function dibujarLinea(color, inicio_x, inicio_y, final_x, final_y) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(inicio_x,inicio_y);
    lienzo.lineTo(final_x,final_y);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoborrar(){
    lienzo.clearRect(0,0, d.width, d.height);
    lienzo.fillStyle = "black";
    lienzo.fillRect(0, 0, d.width, d.height);
    dibujarLinea(colorlinea,1,1,1,ancho-1);
    dibujarLinea(colorlinea,1,ancho-1,ancho-1,ancho-1);
    dibujarLinea(colorlinea,1,1,ancho-1,1);
    dibujarLinea(colorlinea,ancho-1,1,ancho-1,ancho-1);
    ultimoPunto = [150,150];
}

function dibujoTeclado(evento) {
    console.log(evento)
    var movimiento = 10
    if (evento.keyCode == teclas.RIGHT && ultimoPunto[0] < 300) {
        dibujarLinea(colorlinea, ultimoPunto[0], ultimoPunto[1], ultimoPunto[0]+movimiento, ultimoPunto[1]);
        ultimoPunto[0] = ultimoPunto[0]+movimiento;
    }
    else if (evento.keyCode == teclas.LEFT && ultimoPunto[0] > 0) {
        dibujarLinea(colorlinea, ultimoPunto[0], ultimoPunto[1], ultimoPunto[0]-movimiento, ultimoPunto[1]);
        ultimoPunto[0] = ultimoPunto[0]-movimiento;
    }
    else if (evento.keyCode == teclas.UP && ultimoPunto[1] > 0) {
        dibujarLinea(colorlinea, ultimoPunto[0], ultimoPunto[1], ultimoPunto[0], ultimoPunto[1]-movimiento);
        ultimoPunto[1] = ultimoPunto[1]-movimiento;
    }
    else if (evento.keyCode == teclas.DOWN && ultimoPunto[1] < 300) {
        dibujarLinea(colorlinea, ultimoPunto[0], ultimoPunto[1], ultimoPunto[0], ultimoPunto[1]+movimiento);
        ultimoPunto[1] = ultimoPunto[1]+movimiento;
    }
}