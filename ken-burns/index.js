const bilde = document.querySelector("#bilde");

const bilder = [
    "./img/img1.jpg",
    "./img/img2.webp",
    "./img/img3.jpg"
];

let indeks = 1;

function byttBilde(evt) {
    const nyttBilde = bilder[indeks];
    bilde.src = nyttBilde;

    indeks++;
    if(indeks >= bilder.length) {
        indeks = 0;
    }
}

bilde.addEventListener("animationiteration", byttBilde);


