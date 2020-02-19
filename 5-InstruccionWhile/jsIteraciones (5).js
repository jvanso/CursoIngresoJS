function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();
while (!(sexo =="f" || sexo =="m"))
{
sexo=prompt("Sexo invalido, reingrese sexo").toLocaleLowerCase();

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN 

//(sexo!= 'f' && sexo != 'm')