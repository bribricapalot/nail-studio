document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuButton = document.querySelector('.menu');
    const navigationLinks = document.querySelector('.links');

    if (menuButton && navigationLinks) {
        menuButton.addEventListener('click', () => {
            navigationLinks.classList.toggle('open');
        });
    }

    // Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => observer.observe(element));
});