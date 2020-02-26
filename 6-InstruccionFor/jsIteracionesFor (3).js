function mostrar()
{

var repeticiones =parseInt(prompt("ingrese el número de repeticiones"));
var contador;
while(isNaN(repeticiones)|| repeticiones < 1){

    repeticiones=parseInt(prompt("Dato invalido, ingrese el número de repeticiones"));
}


for(contador=1 ; contador <=repeticiones ; contador ++ )
{

document.write("Hola UTN FRA"+"</br>");

}

}//FIN DE LA FUNCIÓN