function mostrar()
{
var precio;
var porcentaje;
var descuento;

precio=prompt("Ingrese precio");
porcentaje=prompt("Ingrese descuento");

precio=parseInt(precio);
porcentaje=parseInt(porcentaje);
descuento=parseInt(descuento);
op1=precio * porcentaje
op2= op1 / 100
op3=precio - op2


document.getElementById("elPrecioFinal").value=op3

}
