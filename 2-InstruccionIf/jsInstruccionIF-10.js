/* Ejercicio instruccion 9
Samuel Fajardo*/
function mostrar()
//Genero el número RANDOM entre 1 y 10 
{
	let num1;
	num1 = Math.floor(Math.random() * 11);
	if (num1 >= 9 ) {
		alert(num1 + " 'EXELENTE'");
	}
	else if (num1 >= 4) {
		alert(num1 + " 'APROBÓ");
	}
	else
	{
		alert(num1 + " 'Vamos, la proxima se puede'");
	}
}
//FIN DE LA FUNCIÓN
/*numero = Math.round(Math.random() * (maximo - minimo) + minimo  );*/