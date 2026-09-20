const images = [
    "assets/01.jpg",
    "assets/02.jpg",
    "assets/03.jpg",
    "assets/04.jpg",
    "assets/05.jpg",
    "assets/06.jpg",
    "assets/07.jpg"
];

const slideshow = document.getElementById("slideshow");


/* PRECHARGEMENT */

images.forEach((src) => {
    const img = new Image();
    img.src = src;
});


/* SLIDESHOW */

let current = 0;

setInterval(() => {

    current = (current + 1) % images.length;

    slideshow.src = images[current];

}, 100);