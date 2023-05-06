// Variabili
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const items= document.getElementById("items");

// Portiamo le immagini in pagina
for (let i= 0; i < images.length; i++ ){
    
    // Immagini principale
    const item = `<div class= "item"><img src="${images[i]}" alt="image"></div>`;
    items.innerHTML += item; 

}

// Settiamo la posizione di partenza
let firstImage= 0;

// Selezioniamo gli elementi creati
const containerItems = document.querySelectorAll("#items .item");
containerItems[firstImage].classList.add('active');

// Facciamo funzionare le frecce






