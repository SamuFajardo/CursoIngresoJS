/* Tp número 2
Samuel Fajardo */
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo;
    let ancho;
    let resultado;
    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);
    resultado = (2*largo + 2* ancho) * 3;
    alert("Se debe comprar " + resultado + " metros de alambre");
}
function Circulo() {
    let radio;
    let resultado;
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    resultado = (2 * 3.1415 * radio) * 3;
    alert("Se debe comprar " + resultado + " metros de alambre");
}
function Materiales() {
    let largo;
    let ancho;
    let BOLSASCEM1 = 2;
    let BOLSASCAL3 = 3;
    let resultado;
    let resulbolsascem;
    let resulbolsascal;
    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    resultado = largo * ancho;
    resulbolsascem = BOLSASCEM1 * resultado;
    resulbolsascal = resultado * BOLSASCAL3;
    alert("Se debe comprar " + resulbolsascem + " bolsas de cemento" + " y " + resulbolsascal + " bolsas de cal");
}