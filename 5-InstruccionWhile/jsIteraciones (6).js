function mostrar()
{

	var contador=0;
	var acumulador=0;
    var numero;


while ( contador <5 )
{

numero=parseInt(prompt("Ingrese un numero"));	
acumulador= acumulador + numero;
contador++;
// o puedo poner contador +1
//while (IsNaN(numero))
// numero=parseint(prompt("eso no es un numer.ingrese un numero"))
//para validar

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN