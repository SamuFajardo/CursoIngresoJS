/* Ejercicio instruccion 2
Samuel Fajardo*/
//tomo la edad
function mostrar() {
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (edad >= 18) {
		alert("Es mayor de edad");
	}
}
//FIN DE LA FUNCIÓN