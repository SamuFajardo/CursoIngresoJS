/* TP4 SOLO CON IF
Samuel fajardo*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio() {
    let cantlamp;
    let PRECIO = 35;
    let precFinal;
    let impufinal;
    let modelo;
    let total;
    let precio2;
    modelo = document.getElementById("Marca").value;
    cantlamp = parseInt(document.getElementById("txtIdCantidad").value);

    if (cantlamp >= 6) {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (PRECIO * cantlamp * 0.5);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }
    else {
        precio2 = PRECIO * cantlamp;
        document.getElementById("txtIdprecioDescuento").value = precio2;
    }

    if (cantlamp == 5 && modelo == "ArgentinaLuz") {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.4);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }
    else if (cantlamp == 5) {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.3);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }


    if (cantlamp == 4 && (modelo == "ArgentinaLuz" || modelo == "FelipeLamparas")) {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.25);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }
    else if (cantlamp == 4) {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.20);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }
    if (cantlamp == 3 && modelo == "ArgentinaLuz") {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.15);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }

    else if (cantlamp == 3 && modelo == "FelipeLamparas") {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.1);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }
    else if (cantlamp == 3) {
        precio2 = PRECIO * cantlamp;
        precFinal = precio2 - (cantlamp * PRECIO * 0.05);
        document.getElementById("txtIdprecioDescuento").value = precFinal;
    }
    if (precFinal >= 120) {
        impufinal = (cantlamp * PRECIO * 0.1);
        total = impufinal + precFinal;
        alert("IIBB Usted pago " + total + " siendo " + impufinal + " el impuesto que se pagó");
    }
}


/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

/* Tp 4 con switch
Samuel Fjarado
 

function CalcularPrecio() {
   let cant;
   let precdesc;
   let marca;
   let PRECIO = 35;
   let precio2;
   let impufinal;
   let total;

   cant = document.getElementById("txtIdCantidad").value;
   cant = parseInt(cant);
   document.getElementById("txtIdprecioDescuento").value = precdesc;
   marca = document.getElementById("Marca").value;
   switch (marca) {
       case "ArgentinaLuz":
           if (cant >= 6) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.5);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else {
               precio2 = cant * PRECIO;
               document.getElementById("txtIdprecioDescuento").value = precio2;
           }
           if (cant == 5) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.4);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else if (cant == 4) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.25);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else if (cant == 3) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.15);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           break;

       case "FelipeLamparas":
           if (cant == 5) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.40);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else if (cant == 4) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.25);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else if (cant == 3) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.10);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else {
               precio2 = cant * PRECIO;
               document.getElementById("txtIdprecioDescuento").value = precio2;
           }
           break;
       default:
           if (cant == 5) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.30);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else if (cant == 4) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.20);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else if (cant == 3) {
               precio2 = cant * PRECIO;
               precdesc = precio2 - (cant * PRECIO * 0.05);
               document.getElementById("txtIdprecioDescuento").value = precdesc;
           }
           else {
               precio2 = cant * PRECIO;
               document.getElementById("txtIdprecioDescuento").value = precio2;
           }
           break;
   }
   if (precdesc >= 120) {
       impufinal = (cant * PRECIO * 0.1);
       total = impufinal + precdesc;
       alert("IIBB Usted pago " + total + " siendo " + impufinal + " el impuesto que se pagó");
   }
}
*/