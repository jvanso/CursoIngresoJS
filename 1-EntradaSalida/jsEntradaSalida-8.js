/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var dividendo
var divisor
dividendo=document.getElementById("numeroDividendo").value;
divisor=document.getElementById("numeroDivisor").value;
dividendo=parseInt(dividendo);
divisor=parseInt(divisor);
division=(dividendo / divisor);
alert("El resto es " + dividendo%divisor);

    
}
