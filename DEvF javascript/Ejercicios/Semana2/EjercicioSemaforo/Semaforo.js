//crear una funcion que reciba como parametro una oracion 
//y defina si es palindromo

function esPalindromo(oracion)
{
    var oracionesSinEspacio = []
    var indice= 0;

    for( var i = 0; i < oracion.length; i++)
    {
        if(oracion[i] == ''){
            console.log("Espacio encontrado en la posicion:" + i);
        }else
        {
            oracionesSinEspacio[indice] = oracion[i];
            oracion[i];
            indice++;
        }
    }

    var indiceAlReves =(oracionesSinEspacio.length -1)

    for(var i=0 ;i <oracionesSinEspacio.length; i++){
        if(oracionesSinEspacio[i] != oracionesSinEspacio[indiceAlReves]){
            return "La oracion  no es palindromo";

        }else{
            indiceAlReves --;
            
        }
        return"La oracion  es palindromo";
    }
}
var inputUsuario = prompt ("Ingrese una oracion");
console.log(esPalindromo(inputUsuario));