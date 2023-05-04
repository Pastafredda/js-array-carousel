const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const items= document.getElementById("items");

for (let i= 0; i < images.length; i++ ){
    const item= `<div class= "item${images[i]}"><img src="${images[i]}" alt=""></div>`;
    items.innerHTML += item;
}