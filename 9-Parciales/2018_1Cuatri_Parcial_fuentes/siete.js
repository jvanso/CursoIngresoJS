function mostrar()
{
var nota;
var sexo;
var acumuladorNotas=0;
var promedioNotas;
var notaBaja;
var sexoBajo;
var flag=0;
var contadorVaronesMas6=0;

for (var i=1 ; i<=5 ; i++)
{
nota=parseInt(prompt("Ingrese nota (0-10)"));
 
while(isNaN(nota) || nota <0 || nota >10){

    nota=parseInt(prompt("Nota invalida.Ingrese nota (0-10)"));
}

sexo=prompt("Ingrese sexo");
while(sexo != "m"  && sexo != "f"){

    sexo=prompt("Sexo invalido.Ingrese sexo");

}

acumuladorNotas=acumuladorNotas + nota;

if(nota < notaBaja || flag==0){

    notaBaja=nota;
    sexoBajo=sexo;
    flag=1;

}


if(sexo=="m" && nota >=6){


contadorVaronesMas6++;    
}


}

promedioNotas=acumuladorNotas / 5;


alert("Promedio notas: " + promedioNotas + "\nNota baja  " + notaBaja + "\nSexo de la persona con nota baja: " + sexoBajo + "\nCantidad de varones con nota >=6  " + contadorVaronesMas6  )











}
