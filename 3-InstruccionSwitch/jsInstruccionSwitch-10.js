/* Ejercicio switch 10
Samuel Fajardo*/
function mostrar() {
	let estacionIngresada;
	let destino;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	switch (estacionIngresada) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja")
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas") {
				alert("Se viaja");
			}
			else {
				alert("No se viaje")
			}
			break;
		case "Primavera":
			if (destino == "Bariloche") {
				alert("No se viaja");
			}
			else {
				alert("Se viaja")
			}
			break;
		default:
			alert("Se viaja");
	}
}//FIN DE LA FUNCIÓN