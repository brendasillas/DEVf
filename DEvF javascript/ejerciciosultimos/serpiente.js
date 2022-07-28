document.addEventListener("keydown", moverCabeza);
const cabeza = document.getElementById("cabeza");

function moverCabeza(e) {
  let horizontalValue = getComputedStyle(cabeza, null)
    .getPropertyValue("left")
    .slice(0, -2);
  horizontalValue = Number(horizontalValue);

  if (e.key === "ArrowRight") {
    cabeza.style.left = horizontalValue + 10 + "px";
  } else if (e.key === "ArrowLeft") {
    cabeza.style.left = horizontalValue - 10 + "px";
  }
}