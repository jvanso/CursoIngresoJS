function mostrar()
{
var pares=0;
var numero;
var contador;
numero=parseInt(prompt("Ingrese un numero"));

while(isNaN(numero)|| numero <1){
    numero=parseInt(prompt("Dato invalido,Ingrese un numero"));

}
for (contador=1;contador <=numero; contador++){

if(contador %2==0){
console.log(contador)
pares++;
}
console.log("Cantidad de numeros pares:" + pares);
}








}//FIN DE LA FUNCIÓN