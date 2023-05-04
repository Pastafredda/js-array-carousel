const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const items= document.querySelectorAll("items");
let activeItem = 0;

for (let i= 0; i < images.length; i++ ){
    const item= `<div class= "item"><img src="${images[i]}" alt=""></div>`;
    items.innerHTML += item;
    items[activeItem].classList.add('active');
    
}

