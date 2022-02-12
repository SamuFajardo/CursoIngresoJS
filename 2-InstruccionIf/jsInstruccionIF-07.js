/* Ejercicio instruccion 7
Samuel Fajardo*/
//tomo la edad  
/*
function mostrar()
//tomo la edad  
/*
{
	let edad;
	let estado;
	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);
	if (edad <= 17 && estado != "Soltero") {
		alert("Es muy pequeño para No ser soltero");
	}
}
//FIN DE LA FUNCIÓN
*/
/* Samuel Fajardo*/
//ejercicio 2 
function mostrar() {
	let edad;
	let estado;
	let mensaje;
	let nombre;
	nombre = prompt(nombre);
	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);
	if (edad < 13) {
		mensaje = "Feliz dia";
	}
	if (edad < 13 && nombre == "Ricardo") {
		mensaje = "muy chiquito para ese nombre";
	}
	if (edad > 13 && estado == "Casado") {
		mensaje = "Casada casa quiere";
	}
	else {
		if (edad < 18) {
			mensaje = "Ústed es adolecente";
		}
		if ((edad < 18 && edad >= 13) && estado == "Divorciado") {
			mensaje = "toda una vida por delante"
		}
		if (edad < 18 && nombre == "Violeta") {
			mensaje = "Como un color";
		}
		if (edad == 17) {
			mensaje = mensaje + " !!!Último año!!!";
		}
		if (edad >= 18) {
			mensaje = "Tenes edad para laburar";
		}
		if ((edad >= 18 && edad <= 60) && estado == "Soltero") {
			mensaje = "Tenes edad para laburar," + " A salir";
		}
		if (edad == 33) {
			mensaje = mensaje + " Como Cristo ";
		}
		if (edad > 60) {
			mensaje = mensaje + " A jubilarse ";
		}
		if (edad >= 60 && nombre == "Alfredo") {
			mensaje = mensaje + " A jubilarse " + "como el de QUEEN";
		}
		if (edad == 88) {
			mensaje = "Lindo número ";
		}
		if (edad % 2 == 0) {
			mensaje = mensaje + " y sos par";
		}
	}
	alert(mensaje);
}
