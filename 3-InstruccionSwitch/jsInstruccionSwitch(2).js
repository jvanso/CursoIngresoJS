function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
switch(mes)
{
case "Enero" && "Febrero" && "Marzo" && "Abril" && "Mayo" && "Junio":
alert("Falta para el invierno");
break

case "Julio" && "Agosto":
    alert("Abrigate que hace frio");
break

case "Septiembre" && "Octubre" && "Noviembre" && "Diciembre":
    alert("Ya pasamos frio,ahora calor");
    break


alert (mes);




}//FIN DE LA FUNCIÓN
}