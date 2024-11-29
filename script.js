const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNextImage() {
    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Set interval for automatic sliding (3 seconds)
setInterval(showNextImage, 3000);

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