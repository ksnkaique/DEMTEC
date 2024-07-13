
const carousel = document.getElementById('carousel');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    showSlide(currentIndex);
});

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

