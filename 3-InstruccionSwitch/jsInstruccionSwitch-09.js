/* Ejercicio switch 9
Samuel Fajardo*/
function mostrar() {
	let estacionIngresada;
	let destino;
	let BASE = 15000;
	let aume;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	switch (estacionIngresada) {
		case "Invierno":
			if (estacionIngresada == "Invierno" && destino == "Bariloche") {
				aume = BASE * 0.2 + BASE;
				alert("El precio del viaje es " + aume);
			}
			else if (estacionIngresada == "Invierno" && destino == "Cataratas" || destino == "Cordoba") {
				aume = BASE - BASE * 0.1;
				alert("El precio del viaje es " + aume);
			}
			else if (estacionIngresada == "Invierno" && destino == "Mar del plata") {
				aume = BASE - BASE * 0.2;
				alert("El precio del viaje es " + aume);
			}
			break;
		case "Verano":
			if (estacionIngresada == "Verano" && destino == "Bariloche") {
				aume = BASE - BASE * 0.20;
				alert("El precio del viaje es " + aume);
			}
			else if (estacionIngresada == "Verano" && destino == "Cataratas" || destino == "Cordoba") {
				aume = BASE * 0.1 + BASE;
				alert("El precio del viaje es " + aume);
			}
			else if (estacionIngresada == "Verano" && destino == "Mar del plata") {
				aume = BASE + BASE * 0.2;
				alert("El precio del viaje es " + aume);
			}
			break;
		default:
			if ((estacionIngresada == "Otoño" || estacionIngresada == "Primavera") && destino != "Cordoba") {
				aume = BASE + BASE * 0.1;
				alert("El precio del viaje es " + aume);
			}
			else {
				alert(BASE);
			}
	}
}//FIN DE LA FUNCIÓN