/*Ejercicio 10
Samuel Fajardo*/
/*
Debemos lograr tomar el importe por ID.
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
