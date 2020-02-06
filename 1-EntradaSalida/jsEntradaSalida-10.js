/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var importe;
  var op;
  var resultado;
  var op2;

  importe=document.getElementById("importe").value;

  importe=parseInt(importe);
  op=(importe * 25);
  op2=(op / 100);

  resultado=(importe - op2);

  document.getElementById("resultado").value=resultado;
  



}
