/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1
    var n2
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    suma=(n1 + n2);
    alert("El resultado es " + suma);
}

function restar()
{
    var n1
    var n2
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    resta=(n1 - n2);
    alert("El resultado es " + resta);

}

function multiplicar()
{ 
var n1
    var n2
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    multiplicacion=(n1 * n2);
    alert("El resultado es " + multiplicacion);	
}

function dividir()
{
	var n1
    var n2
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    division=(n1 / n2);
    alert("El resultado es " + division);
    
}

