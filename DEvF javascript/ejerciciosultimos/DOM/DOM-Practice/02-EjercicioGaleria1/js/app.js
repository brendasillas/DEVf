const mainImage = document.getElementById('bigImage');
 const firstBttn = document.getElementById('firstImage');
const secondBttn = document.getElementById('secondImage');
const thirdBttn = document.getElementById('thirdImage');
const fourthBttn = document.getElementById('fourthImage');
const paragraph  = document.getElementById('paragraph');



firstBttn.onclick=() => {
mainImage.src="./assets/img/mario.jpg";
paragraph.innerHTML = "First image";

}

secondBttn.onclick=() => { 
mainImage.src="./assets/img/mario2.jpg";
paragraph.innerHTML = "Second image";

}

thirdBttn.onclick=() => {
mainImage.src= "./assets/img/mario3.jpg"; 
paragraph.innerHTML = "Third image";

}

fourthBttn.onclick= () => {
mainImage.src="./assets/img/mario4.jpg"; paragraph.innerHTML = "Fourth image";

}