/* Ejercicio switch 5
Samuel Fajardo*/
function mostrar() {
	//tomo la hora
	var horaDelDia;
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);
	switch (horaDelDia) {
		case 11:
		case 10:
		case 9:
		case 8:
		case 7:
			alert("Es de mañana");
			break;
		default:
	}
}//FIN DE LA FUNCIÓN