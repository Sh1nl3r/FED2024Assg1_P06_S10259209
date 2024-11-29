// Select the carousel container and items
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

// Initialize variables
let currentIndex = 0;
const totalItems = items.length;

// Function to update the carousel
function updateCarousel() {
    // Calculate the new transform value
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first item
    updateCarousel();
}

// Set an interval to rotate the slides every 3 seconds
setInterval(nextSlide, 3000);
