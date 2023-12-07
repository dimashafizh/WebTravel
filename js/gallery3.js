let images3 = [
    "images/nepalvanjava.jpg",
    "images/rafting.jpg",
    "images/borobudur.jpg",
    "images/merapi.jpg",
];

let currentImageIndex3 = 0;
const imgElement3 = document.querySelector(".card img[alt='Tour 3']");

const prevButton3 = document.getElementById("prevBtn3");
const nextButton3 = document.getElementById("nextBtn3");

prevButton3.addEventListener("click", showPreviousImage3);
nextButton3.addEventListener("click", showNextImage3);

function showPreviousImage3() {
    currentImageIndex3 = (currentImageIndex3 - 1 + images3.length) % images3.length;
    updateImage3();
}

function showNextImage3() {
    currentImageIndex3 = (currentImageIndex3 + 1) % images3.length;
    updateImage3();
}

function updateImage3() {
    imgElement3.src = images3[currentImageIndex3];
}

updateImage3();