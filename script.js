document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const totalItems = items.length;

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate offset for the current slide
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems; // Move to the next slide
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move to the previous slide
        updateCarousel();
    });
});


document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get all input fields except "Queries"
    const requiredFields = document.querySelectorAll(
        "#first-name, #last-name, #email, #phone-number, #repair"
    );

    let isValid = true; // Flag to track if the form is valid

    requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
            // Add a red border if the field is empty
            field.style.border = "2px solid red";
            isValid = false;
        } else {
            // Reset the border color if the field is valid
            field.style.border = "1px solid #ccc";
        }
    });

    if (isValid) {
        alert("Form submitted successfully!"); // Optional success message
        // You can submit the form here (e.g., using AJAX or just form.submit())
    } else {
        alert("Please fill in all required fields."); // Optional error message
    }
});