/* Ejercicio switch 2
Samuel Fajardo*/
function mostrar()
 {
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	switch (mesDelAño) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
				alert("Falta para invierno");
				break;
		case "Julio":
		case "Agosto":
				alert("Abrigate hace frio");
				break;
	   case "Septiembre":
	   case "Octubre":
	   case "Noviembre":
	   case "Diciembre":
				alert("Ya pasamos el frio, ahora calor!!!");
				break;
	}
}//FIN DE LA FUNCIÓN