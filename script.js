const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function moveToSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

// changes carousel every 3 seconds
setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
}, 3000);

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); //  prevents from submission

    // gets all input fields except "Queries" div
    const requiredFields = document.querySelectorAll(
        "#first-name, #last-name, #email, #phone-number, #repair"
    );

    let isValid = true; // track validity of form

    requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
            // adds red border if isvalid is false
            field.style.border = "2px solid red";
            isValid = false;
        } else {
            // resets border color if isvalid is true
            field.style.border = "1px solid #ccc";
        }
    });

    if (isValid) {
        alert("Form submitted successfully!"); // form submission message
    } else {
        alert("Please fill in all required fields."); // error message
    }
});