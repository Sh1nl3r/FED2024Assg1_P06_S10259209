document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission and page refresh

    // Get all required fields except "Queries" field
    const requiredFields = document.querySelectorAll(
        "#first-name, #last-name, #email, #phone-number, #repair"
    );

    let isValid = true; // Track form validity

    // Validate required fields
    requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
            // Add red border if the field is empty
            field.style.border = "2px solid red";
            isValid = false;
        } else {
            // Reset border if the field is valid
            field.style.border = "1px solid #ccc";
        }
    });

    // Validate email format
    const emailField = document.querySelector("#email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    if (!emailRegex.test(emailField.value.trim())) {
        emailField.style.border = "2px solid red";
        isValid = false;
        alert("Please enter a valid email address."); // Alert user about invalid email
    } else {
        emailField.style.border = "1px solid #ccc";
    }

    if (isValid) {
        alert("Form submitted successfully!"); // Display success message
    } else {
        alert("Please fill in all required fields correctly."); // Display error message
    }
});
