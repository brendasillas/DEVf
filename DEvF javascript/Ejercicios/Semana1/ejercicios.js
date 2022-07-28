
// //1.Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
// var belleza = prompt("¿Eres bellisimo/a?")

//  //var belleza = prompt (belleza)

//  if (belleza == "si"){
//    alert("Ciertamente")
//  }
//  else
//    {
//     alert("chale")
//    }

// // 2..Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
//    var numero = prompt("Ingresa un numero:")

//    if(numero % 2 == 0)
//    {
//      prompt(numero,"Es divicible entre 2")
//    }
//    else
//    {
//     prompt(numero,"No es divicible entre 2")
//    }

// //3..Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
// var numero1 = prompt("Ingrese un número:")

// if(numero1 % 2 == 0)
// {
//     prompt(numero1,"Es par")
//   }
//   else
//   {
//    prompt(numero1,"Es impar")
//   }

/* // 4..  Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
var numerocliente = prompt ("Ingrese su numero de cliente:")
if(numerocliente == 1000)
{
    alert("GANASTE UN PREMIO!!!!")

}
else
{
    prompt(numero,"Lo sentimos sigue participando :(")
}*/

 // 4..  Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
var numero1 = prompt("Ingresa el primer numero:")
var numero2 = prompt("Ingresa el segundo numero:")

if(numero1 > numero2)
{
    prompt(numero1,"es mayor")
}
else
{
    prompt(numero2,"es mayor")
}
 
// // 5  Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// var numero1 = prompt("Ingresa el primer numero:")
// var numero2 = prompt("Ingresa el segundo numero:")
// var numero3 = prompt("Ingresa el tercer numero:")

// if(numero1 > numero2)
// {
//     if(numero1> numero3)
//     {
//     alert(numero1,"es mayor que",numero2 ,"y",numero3)
//     }
// }
// else if(numero2 > numero3)
// {

//     alert(numero2,"es mayor que",numero3 ,"y" ,numero1)
// }
// else if(numero3 > numero2)
// {
//     if(numero3> numero1)
//     {
//     alert(numero3,"es mayor que",numero2 ,"y",numero1)
//     }
// }


// // 6.  Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// var dia = prompt("Ingresa el dia de la semana:")
// switch(dia){
// case "Lunes":
//     alert ("Vamos tu dale")
// break;
// case "Viernes":
//  alert ("Por fin :)")
// break;
// case "Sabado":
// alert ("Eale ya es fin")
// break;
// case "Domingo":
// alert("uy ya casi se acaba el fin :( ")
// default:
//     alert("ya mero ")
// }

// //7   Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
// var calif = prompt("Ingresa su calificacion de entre 1-10:")
// if (calif <= 0 || calif > 10)
// {
//     alert("Error")
// }
// if(calif <6 && calif >=1)
// {
//     alert("Estas Reprobado!!")
// }
// if(calif >6 && calif <=8)
// {
//     alert("Regular")
// }
// if(calif == 9)
// {
//     alert("Bien")
// }
// if(calif == 10)
// {
//     alert("Excelente")
// }

// //  8.. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// //   El helado sin topping cuesta 50 MXN.
// //   El topping de oreo cuesta 10 MXN.
// //   El topping de KitKat cuesta 15 MXN.
// //   El topping de brownie cuesta 20 MXN.
// //   En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
//  */