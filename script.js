const text = "Welcome to my portfolio"; // The text you want to type and delete
const typingText = document.getElementById('typingText');
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index < text.length) {
        typingText.innerHTML = text.slice(0, ++index);
        setTimeout(typeEffect, 150); // Delay between typing each character
    } else if (isDeleting && index > 0) {
        typingText.innerHTML = text.slice(0, --index);
        setTimeout(typeEffect, 100); // Delay between deleting each character
    } else if (index === text.length) {
        isDeleting = true; // Start deleting after full text is typed
        setTimeout(typeEffect, 1000); // Pause before deleting starts
    } else if (index === 0) {
        isDeleting = false; // Start typing again after deletion is complete
        setTimeout(typeEffect, 500); // Pause before typing starts again
    }
}

// Start the typing effect
typeEffect();
