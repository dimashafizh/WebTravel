let images4 = [
    "images/hehasky.jpg",
    "images/tamansari.jpg",
    "images/malioboro.jpg",
    "images/parangtritis.jpg",
];

let currentImageIndex4 = 0;
const imgElement4 = document.querySelector(".card img[alt='Tour 4']");

const prevButton4 = document.getElementById("prevBtn4");
const nextButton4 = document.getElementById("nextBtn4");

prevButton4.addEventListener("click", showPreviousImage4);
nextButton4.addEventListener("click", showNextImage4);

function showPreviousImage4() {
    currentImageIndex4 = (currentImageIndex4 - 1 + images4.length) % images4.length;
    updateImage4();
}

function showNextImage4() {
    currentImageIndex4 = (currentImageIndex4 + 1) % images4.length;
    updateImage4();
}

function updateImage4() {
    imgElement4.src = images4[currentImageIndex4];
}

updateImage4();