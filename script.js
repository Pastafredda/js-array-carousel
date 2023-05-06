// Variabili
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const items= document.getElementById("items");
const previus= document.getElementById("previus");
const next= document.getElementById("next");


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
next.addEventListener('click', nextFunction)

function nextFunction(){

    // Rimuoviamo la classe active alla prima immagine
    containerItems[firstImage].classList.remove('active');

    // Diciamo di farlo per le successive
    firstImage++;

    // Quando la classe active arriverà all'ultimo elemento
    if(firstImage == images.length){

        // Gli diciamo di tornare a 0 per creare il loop
        firstImage = 0;
    }

    containerItems[firstImage].classList.add('active');
  
}

previus.addEventListener('click', previusFunction)

function previusFunction(){
    
    // Rimuoviamo la classe active alla prima immagine
    containerItems[firstImage].classList.remove('active');

    // Diciamo di farlo per le precedenti in questo caso
    firstImage--;

    // Quando la classe active arriverà al primo elemento
    if(firstImage < 0){

        // Gli diciamo tornare all'ultima immagine
        firstImage = images.length -1;
    }

    
    containerItems[firstImage].classList.add('active');
}








