function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio
	aleatorio=Math.floor(Math.random()*((10+1)-1)+1);
if (aleatorio  >=9)
{alert("La nota es " + aleatorio + " excelente");}

else if (aleatorio >=4)
{alert("La nota es " + aleatorio + " aprobo");}

else {alert("La nota es " + aleatorio + " vamos la proxima se puede");}



	

}//FIN DE LA FUNCIÓN