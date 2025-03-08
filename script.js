const images = [
    "./Images/img1.webp",
    "./Images/img2.webp",
    "./Images/img3.webp",
    "./Images/img4.webp"
];
let currentIndex = 0;
const slider = document.getElementById("slider");
function showImage(index) {
    slider.style.opacity = "0";  
    setTimeout(() => {
        slider.src = images[index];
        slider.style.opacity = "1";  
    }, 300);
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

window.onload = () => showImage(currentIndex);
