
// Find the button and the letter
const button = document.getElementById("open-letter");
const letter = document.getElementById("letter");
const message = document.getElementById("typed-message");

// Our friendship message
const text = "ons, I don't think you realize how much happiness you bring into my life. From our little conversations to all the moments we share, I'm so grateful that life brought us together. You are more than a friend; you are a little piece of home. Never forget how special you are. ♡";

// When the button is clicked
button.addEventListener("click", function () {

    // Show the letter
    letter.hidden = false;

    // Hide the button
    button.style.display = "none";

    // Start the typing animation
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            message.textContent += text.charAt(i);
            i++;

            setTimeout(typeWriter, 45);
        }
    }

    typeWriter();
});
