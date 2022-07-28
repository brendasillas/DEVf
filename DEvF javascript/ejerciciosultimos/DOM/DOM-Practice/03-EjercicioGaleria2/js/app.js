 const firstBttn = document.getElementById('btn1');
const secondBttn = document.getElementById('btn2');
const thirdBttn = document.getElementById('btn3');
const mainImage =document.getElementById('image')



firstBttn.onclick=() => {
    debugger;
mainImage.src="./assets/img/img1.jpg";
paragraph.innerHTML = "First image";

}

secondBttn.onclick=() => { 
mainImage.src="./assets/img/img2.jpg";
paragraph.innerHTML = "Second image";

}

thirdBttn.onclick=() => {
mainImage.src= "./assets/img/img3.jpg"; 
paragraph.innerHTML = "Third image";

}
