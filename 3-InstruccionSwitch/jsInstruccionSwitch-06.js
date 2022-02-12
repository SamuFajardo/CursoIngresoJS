/* Ejercicio switch 6
Samuel Fajardo*/
function mostrar()
{
	//tomo la hora
	var horaDelDia ;
	horaDelDia=document.getElementById("txtIdHora").value;
	 horaDelDia=parseInt(horaDelDia);
	 switch (horaDelDia){
		case   11:
		case   10:
		case   9:
		case   8:
		case   7:
			alert("Es de mañana");
			break;
	    case   19:
		case   18:
		case   17:
		case   16:
		case   15:
		case   14:
		case   13:
		case   12:
			alert("Es de tarde")
			break;
		case   24:
		case   23:
		case   22:
		case   21:
		case   20:
		case   0:
		case   1:
		case   2:
		case   3:
		case   4:
		case   5:
		case   6:
			alert("Es de noche")
			break;
		default:
				alert("La hora no existe")
				break;
	 }
}//FIN DE LA FUNCIÓN