// Typewriter Effect for Hero Title
const typewriterElement = document.getElementById('hero-title');
const originalText = typewriterElement.innerHTML;
typewriterElement.innerHTML = '';

let i = 0;
const speed = 70; // Typing speed in ms

function typeWriter() {
    if (i < originalText.length) {
        typewriterElement.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start typewriter after a short delay
window.onload = () => {
    setTimeout(typeWriter, 500);
    scrollReveal(); // Initial check for visible elements
};

// Cinematic Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('active');
        } else {
            // Optional: Remove active class if you want elements to hide again when scrolling up
            // element.classList.remove('active');
        }
    });
};

// Throttled Scroll Listener for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            scrollReveal();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Console Easter Egg
console.log("%cDESIGN TO DISCOVER", "color: #ff6d00; font-size: 30px; font-weight: bold; font-family: sans-serif;");
console.log("%cChecking out the tech? Let's talk robotics. - Aarish", "color: #00e5ff; font-size: 14px;");
