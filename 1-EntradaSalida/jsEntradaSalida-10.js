/*Ejercicio 10
Samuel Fajardo*/
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() 
{
	let num1;
	let num2;
	num1 = document.getElementById("txtIdImporte").value;
	num1 = parseInt(num1);
	num2 = num1 - (num1 * 25) / 100;
	document.getElementById("txtIdResultado").value = num2;
}

/*Ejercicio E/S10 Bis1
Samuel Fajardo
function mostrarAumento()
{
    let importe;
	let resultado;
	let porcentaje;
	importe= document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	porcentaje= prompt("Ingresar porcentaje de descuento");
	resultado=importe-(porcentaje*importe/100);
	document.getElementById("txtIdResultado").value =resultado;
}
*/

/*Ejercicio E/S10 Bis2
Samuel Fajardo
function mostrarAumento()
{
    let importe;
	let resultado;
	let porcentaje;
	let producto;
	importe= document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	producto=prompt("Ingrese nombre del produto");
	porcentaje= prompt("Ingresar porcentaje de descuento");
	resultado=importe-(porcentaje*importe/100);
	document.getElementById("txtIdResultado").value =resultado;
	alert("Usted compro un/una "+producto+" con el "+ porcentaje +"% de descuento, el precio final es " +resultado);
}
*/