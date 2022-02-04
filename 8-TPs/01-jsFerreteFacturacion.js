/* Tp número 1
Samuel Fajardo */
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseInt(precioUno)
    precioDos = parseInt(precioDos)
    precioTres = parseInt(precioTres)
    resultado = "La suma es " + (precioUno + precioDos + precioTres);
    alert(resultado)
}
function Promedio()
{
    let preciou;
    let preciod;
    let preciot;
    let result;
    preciou = document.getElementById("txtIdPrecioUno").value;
    preciod = document.getElementById("txtIdPrecioDos").value;
    preciot = document.getElementById("txtIdPrecioTres").value;
    preciou = parseInt(preciou)
    preciod = parseInt(preciod)
    preciot = parseInt(preciot)
    result = "El promedio es " + (preciou + preciod + preciot) / 3;
    alert(result)

}
function PrecioFinal() 
{
    let preuno;
    let predos;
    let pretres;
    let suma;
    let resu;
    let iva;
    preuno = document.getElementById("txtIdPrecioUno").value;
    predos = document.getElementById("txtIdPrecioDos").value;
    pretres = document.getElementById("txtIdPrecioTres").value;
    preuno = parseInt(preuno);
    predos = parseInt(predos);
    pretres = parseInt(pretres);
    suma = preuno + predos + pretres;
    iva = (suma * 21) / 100;
    resu = "El precio final mas el 21% es " + (iva + suma);
    alert(resu)
}