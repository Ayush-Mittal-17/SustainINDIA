let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slideWidth = 960;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(nextSlide, 2000);

showSlide(currentIndex);

function downloadPDF(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
