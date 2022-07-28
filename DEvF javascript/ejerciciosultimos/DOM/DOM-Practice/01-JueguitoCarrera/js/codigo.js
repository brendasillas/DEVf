
const inferior =1;
const superior=10;
const btninicio = document.getElementById("inicio");
const btnreinicio = document.getElementById("reinicio");


btninicio.addEventListener('click', function() {
    let avance = 0;
    let jugador1 = 0;
    let jugador2 = 0;
    let jugador3 = 0;
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    let limit = 10;
    const cabeza = document.getElementById("jugador1");
    const cabeza2 = document.getElementById("jugador2");
    const cabeza3 = document.getElementById("jugador3");

    while(contador1<limit && contador2<limit && contador3<limit)
    {
        console.log("Si while")
        contador1 +=aleatorio();
        let horizontalValue = getComputedStyle(cabeza, null).getPropertyValue("left").slice(0, -2);
        horizontalValue = Number(horizontalValue);
        cabeza.style.left = horizontalValue + contador1 + "px";

        contador2 +=aleatorio(inferior,superior);
         horizontalValue = getComputedStyle(cabeza2, null).getPropertyValue("left").slice(0, -2);
        horizontalValue = Number(horizontalValue);
        cabeza2.style.left = horizontalValue + contador2 + "px";

        contador3 +=aleatorio(inferior,superior);
        horizontalValue = getComputedStyle(cabeza3, null).getPropertyValue("left").slice(0, -2);
        horizontalValue = Number(horizontalValue);
        cabeza3.style.left = horizontalValue + contador3 + "px";
    }

})

function aleatorio() {
    var aleatorio = Math.round(Math.random()*10);
    return aleatorio;
}

function avancejugador(jugador,contador) {
    if(jugador == 'jugador1'){

    var contador1 = contador + contador;
    }
    return contador1;
}

btnreinicio.addEventListener('click', function() {
    let avance = 0;
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    
    const cabeza = document.getElementById("jugador1");
    const cabeza2 = document.getElementById("jugador2");
    const cabeza3 = document.getElementById("jugador3");

        cabeza.style.left = contador1 + "px";
        cabeza2.style.left = contador1 + "px";
        cabeza3.style.left = contador3 + "px";

})