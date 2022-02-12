/* Tp número 3
Samuel Fajardo */
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temp1F;
    let resultado;
    temp1F=document.getElementById("txtIdTemperatura").value;
    temp1F=parseInt(temp1F);
    resultado=((temp1F-32)*5/9).toFixed(2);
    alert(temp1F+" grados Fahrenheit son "+resultado+" grados centígrados ");
}

function CentigradosFahrenheit () 
{
    let temp1C;
    let resultado;
    temp1C=document.getElementById("txtIdTemperatura").value;
    temp1C=parseInt(temp1C);
    resultado=((temp1C*9/5)+32).toFixed(2);
    alert(temp1C+" grados centígrados son "+resultado+" grados Fahrenheit");
}
