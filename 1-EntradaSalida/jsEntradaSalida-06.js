/* Ejercicio 6
Samuel Fajardo*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
 {
	let numerpri;
	let numerdos;
	let total;
	let mensaje;
	numerpri = document.getElementById("txtIdNumeroUno").value;
	numerdos = document.getElementById("txtIdNumeroDos").value;
	numerpri = parseInt(numerpri);
	numerdos = parseInt(numerdos);
	total = (numerpri + numerdos);
	mensaje = "La suma es " + total;
	alert(mensaje);
}

