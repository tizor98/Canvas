// Evento que detecta el click del mouse y aplica una función
document.addEventListener("mousemove",dibujoMouse);
var posicionX, posicionY;

// Trae el input del boton de reiniciar y del color
var volver = document.getElementById("reiniciarDibujo");
volver.addEventListener("click", dibujoborrar);
var colorlinea = document.getElementById("colordibujo");

// Delimitación del canvas definido con HTML para dibujar
var d = document.getElementById("dibujo1");
var ancho = d.width;
var largo = d.height;
var lienzo = d.getContext("2d");
lienzo.fillStyle = "F4F2F3";
lienzo.fillRect(0, 0, d.width, d.height);
const datosLienzo = d.getBoundingClientRect()

// Dibuja las líneas exteriores
dibujarLinea(colorlinea.value,1,1,1,largo-1);
dibujarLinea(colorlinea.value,1,largo-1,ancho-1,largo-1);
dibujarLinea(colorlinea.value,1,1,ancho-1,1);
dibujarLinea(colorlinea.value,ancho-1,1,ancho-1,largo-1);

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
    lienzo.fillStyle = "F4F2F3";
    lienzo.fillRect(0, 0, d.width, d.height);
    dibujarLinea(colorlinea.value,1,1,1,largo-1);
    dibujarLinea(colorlinea.value,1,largo-1,ancho-1,largo-1);
    dibujarLinea(colorlinea.value,1,1,ancho-1,1);
    dibujarLinea(colorlinea.value,ancho-1,1,ancho-1,largo-1);
}

function dibujoMouse(evento) {
    if (evento.buttons == 1) {
        if (posicionX == null){
            posicionX = evento.layerX - datosLienzo.x;
            posicionY = evento.layerY - datosLienzo.y;
        }
        dibujarLinea(colorlinea.value, posicionX, posicionY, posicionX + evento.movementX, posicionY + evento.movementY);
        posicionX = posicionX + evento.movementX;
        posicionY = posicionY + evento.movementY;
    }
    if (evento.buttons == 0) {
        posicionX = null;
        posicionY = null;
    }
}