/* Ejercicio switch 4
Samuel Fajardo*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño)
	 {
		case "Marzo":
		case "Mayo":
		case "Agosto":
		case "Julio":
		case "Diciembre":
		case "Octubre":
		case "Enero":
				alert("Este mes tiene 31 dias");
				break;
		case "Febrero":
				alert(" Este mes tiene 28");
				break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
				alert("Este mes tiene 30 dias");
				break;
	}
}//FIN DE LA FUNCIÓN