/*Ejercicio 9
Samuel Fajardo*/
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() 
{
	let num1;
	let result;
	num1 = document.getElementById("txtIdSueldo").value;
	num1 = parseInt(num1)
	result = (num1+(num1 / 100) * 10);
	document.getElementById("txtIdResultado").value = result;
}
