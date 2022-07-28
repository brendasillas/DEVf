// let contador = 0;
// let color ="verde"
// const Setcolor = () => {
//     contador ++;
//     //console.log("Verde");
//     if(color == "verde")
//     {
//         console.clear();
//         console.log("Amarillo");
//         color ="Amarillo";
//     }
//     else if (color== "Amarillo")
//     {
//         console.clear();
//         console.log("Rojo")
//         color ="Rojo";
//     }
//     else if (color== "Rojo")
//     {
//         console.clear();
//         console.log("verde")
//         color ="verde";
//     }

//     if(contador > 2 ) contador=0;
// }
// setInterval(Setcolor,5000)

//Escribe una función de JavaScript que devuelva una cadena con letras en orden alfabético.
//Cadena de ejemplo: 'webmaster'
//Resultado esperado: 'abeemrstw'
// const cadenaConLetrasOrdenadas = cadena => {
//     // Convertir a arreglo
//     debugger
//     const cadenaComoArreglo = cadena.split("");
//     // Ordenar
//     cadenaComoArreglo.sort();
//     // Volver a convertir a cadena
//     const cadenaOrdenada = cadenaComoArreglo.join("");
//     return cadenaOrdenada;
// };
// const palabra = "webmaster";
// const conLetrasOrdenadas = cadenaConLetrasOrdenadas(palabra);
// console.log("Palabra original: '%s'. Palabra ordenada: '%s'", palabra, conLetrasOrdenadas);

//invertir el numero
// const cadenaOrdenadas = cadena => {
//     // Convertir a arreglo
//     debugger
//     const cadenaComoArreglo = cadena.split("");
//     // Ordenar
//     cadenaComoArreglo.reverse();
//     // Volver a convertir a cadena
//     const cadenaOrdenada = cadenaComoArreglo.join("");
//     return cadenaOrdenada;
// };
// const Cadena = "32456";
// const Ordenadas = cadenaOrdenadas(Cadena);
// console.log("Palabra original: '%s'. Palabra ordenada: '%s'", Cadena, Ordenadas);



//conbinaciones de la palabra perro
function ObtenerConvinaciones(palabraComoArreglo){
    
    
     return palabraComoArreglo.reduce((a,v)=> a.concat(a.map(d => [v].concat(d))), [[]]);
    
}

// const Palabra = "Perro";
// const palabraComoArreglo = Palabra.split("");
console.log(ObtenerConvinaciones(['p','e','r','r','o']));





