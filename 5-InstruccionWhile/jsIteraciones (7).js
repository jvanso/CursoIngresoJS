function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;
	do{
numero=parseInt(prompt("Ingrese un numero"));
acumulador=acumulador + numero;
contador++
respuesta=prompt("¿Quiere ingresar otro numero?");


	}while(respuesta =='si');

promedio=acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN