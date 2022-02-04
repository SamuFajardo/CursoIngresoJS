/*Ejercicio 
Samuel Fajardo*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
 {
   let numuno;
   let numdos;
   let total;
   numuno = document.getElementById("txtIdNumeroUno").value;
   numdos = document.getElementById("txtIdNumeroDos").value;
   numuno = parseInt(numuno,);
   numdos = parseInt(numdos,);
   total = "La suma es " + (numuno + numdos);
   alert(total);
}

function restar() {
   let numu;
   let numd;
   let tota2;
   numu = document.getElementById("txtIdNumeroUno").value;
   numd = document.getElementById("txtIdNumeroDos").value;
   numu = parseInt(numu,);
   numd = parseInt(numd,);
   tota2 = "La resta es " + (numu - numd);
   alert(tota2);

}

function multiplicar() {
   let numt;
   let numc;
   let tota3;
   numt = document.getElementById("txtIdNumeroUno").value;
   numc = document.getElementById("txtIdNumeroDos").value;
   numt = parseInt(numt,);
   numc = parseInt(numc,);
   tota3 = "La multiplicación es " + (numt * numc);
   alert(tota3);

}

function dividir() {
   let numci;
   let numdse;
   let tota4;
   numci = document.getElementById("txtIdNumeroUno").value;
   numdse = document.getElementById("txtIdNumeroDos").value;
   numci = parseInt(numci,);
   numdse = parseInt(numdse,);
   tota4 = "La divición es " + (numci / numdse);
   alert(tota4);
}

