function mostrar()
{

var marca;
var peso;
var temperatura;
var contadorTpar=0;
var marcaPesada;
var mayorPeso;
var contadorMenor0= 0;
var acumuladorPeso= 0;
var promedioPeso;
var contador= 0;
var menorPeso;
var seguir;
var flag= 0;



do{

marca=prompt("Ingrese una marca");

peso=parseInt(prompt("Ingrese el peso"));
while(peso <1 || peso > 100   || isNaN(peso)){

    peso=parseInt(prompt("Dato invalido.Ingrese el peso"));
}

temperatura=parseInt(prompt("Ingrese una temperatura (-30 y 30)"));
while(temperatura < -30 || temperatura > 30){

    temperatura=parseInt(prompt("Dato invalido. Ingrese una temperatura (-30 y 30)"));
}

if (temperatura %2==0)
{contadorTpar++; }

if(peso >mayorPeso || flag == 0) {
mayorPeso=peso;
marcaPesada=marca;
}

if(peso <menorPeso || flag == 0){

menorPeso=peso;
flag=1;
}
if(temperatura <0){

contadorMenor0++

}

acumuladorPeso = acumuladorPeso + peso;
        contador++;





seguir=(prompt("Desea continuar?"));
}while (seguir =="s");

promedioPeso = acumuladorPeso / contador;



document.write("a) La cantidad de temperaturas pares: " + contadorTpar + "</br>");
document.write("b) La marca del producto más pesado: " + marcaPesada + "</br>");
document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorMenor0 + "</br>");
document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
document.write("e) Peso máximo: " + mayorPeso + " Peso mínimo: " + menorPeso + "</br>");



}
