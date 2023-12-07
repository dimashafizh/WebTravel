let images2 = [
    "images/bns.jpg",
    "images/cobanrondo.jpg",
    "images/kotamalang3.jpg",
    "images/pantaimalang2.jpg",
];

let currentImageIndex2 = 0;
const imgElement2 = document.querySelector(".card img[alt='Tour 2']");

const prevButton2 = document.getElementById("prevBtn2");
const nextButton2 = document.getElementById("nextBtn2");

prevButton2.addEventListener("click", showPreviousImage2);
nextButton2.addEventListener("click", showNextImage2);

function showPreviousImage2() {
    currentImageIndex2 = (currentImageIndex2 - 1 + images2.length) % images2.length;
    updateImage2();
}

function showNextImage2() {
    currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
    updateImage2();
}

function updateImage2() {
    imgElement2.src = images2[currentImageIndex2];
}

updateImage2();