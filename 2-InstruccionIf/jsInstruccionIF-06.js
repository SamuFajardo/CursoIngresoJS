/* Ejercicio instruccion 6
Samuel Fajardo*/
//tomo la edad  
function mostrar() 
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (edad >= 18) {
		alert("Es mayor de edad");
	}
	if (edad >= 13 && edad <= 18) {
		alert("Es adolescente");
	}
	if (edad <= 13) {
		alert("Es niño")
	}
}
//FIN DE LA FUNCIÓN