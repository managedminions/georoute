// Get the contact section and the name input field
const contactSection = document.getElementById('contact');
const nameField = document.getElementById('contact-name');
let hasFocused = false; // Flag to ensure focus is set only once

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the position of the contact section relative to the viewport
    const rect = contactSection.getBoundingClientRect();

    // Check if the top of the contact section is in the viewport and hasn't been focused yet
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasFocused) {
        // Set the focus on the name input field
        nameField.focus();
        // Set the flag to true so the focus is not set again on subsequent scrolls
        hasFocused = true;
    }
});
