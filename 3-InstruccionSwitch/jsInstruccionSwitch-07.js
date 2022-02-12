/* Ejercicio switch 7
Samuel Fajardo*/
function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Se encuentra en el Oeste");
			break;
		case "Cataratas":
			alert("Se encuentra en el Noreste");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Sureste");
			break;
		case "Ushuaia":
			alert("Se encuentra en el Sur");
	}

}//FIN DE LA FUNCIÓN