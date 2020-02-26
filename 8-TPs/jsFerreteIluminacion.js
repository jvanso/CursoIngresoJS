/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad=parseInt(document.getElementById("Cantidad").value);
     var marca=document.getElementById("Marca").value;
     var precio=35;
     var porcdescuento;
     var descuento;
     var IIBB;
     var importefinal;
     var preciocondescuento;

     switch (cantidad){
     case 1:
     case 2:
     porcdescuento= 0;
     break;

     case 3:
     if (marca=="ArgentinaLuz") {

porcdescuento= 15;

     }else if(marca=="FelipeLamparas") {

porcdescuento=10;

     }else {

        porcdescuento=5;
     }
break;
     case 4:
     
     if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){

        porcdescuento=25;
     }else{

        porcdescuento=20;
     }
     break;
     case 5:

     if(marca=="ArgentinaLuz"){

        porcdescuento=40;
     }
else{
    porcdescuento=30;
}
break;
default:
porcdescuento=50;

     }
   
   descuento = precio * porcdescuento /100; 

preciocondescuento =precio - descuento;

document.getElementById("precioDescuento").value=preciocondescuento;

importefinal=preciocondescuento * cantidad

if (importefinal >120){

    IIBB= importefinal *10 /100;

    importefinal=importefinal + IIBB;
    alert("El importe final es $" + importefinal + "/nUsted pago $" + IIBB+ "de ingresos brutos");

}else 
alert("El importe final es de $" + importefinal);


}
