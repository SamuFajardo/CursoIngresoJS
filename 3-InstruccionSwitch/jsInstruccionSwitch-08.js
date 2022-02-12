/* Ejercicio switch 8
Samuel Fajardo*/
function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Hace frío");
			break;
		case "Cataratas":
			alert("Hace calor");
			break;
		case "Mar del plata":
			alert("Hace Frio");
			break;
		case "Ushuaia":
			alert("Hace frí");
	}
}//FIN DE LA FUNCIÓN
