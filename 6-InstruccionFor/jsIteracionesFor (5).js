function mostrar()
{
var numero=parseInt(prompt("Ingrese un numero"));
var contador;
while(isNaN(numero)){

    numero=parseInt(prompt("Dato invalido,Ingrese un numero"));
}
for ( ; ; ){

    numero=parseInt(prompt("Ingrese un numero"));

    if(numero==9)
    break;
    alert(numero);
}


}//FIN DE LA FUNCIÓN