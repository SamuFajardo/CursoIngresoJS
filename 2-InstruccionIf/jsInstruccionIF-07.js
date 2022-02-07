/* Ejercicio instruccion 7
Samuel Fajardo*/
//tomo la edad  
function mostrar()
//tomo la edad  
{
	let edad;
	let estado;
	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);

	if (edad <= 17 && estado != "Soltero") 
	{
		alert("Es muy pequeño para No ser soltero");
	}
}
//FIN DE LA FUNCIÓN