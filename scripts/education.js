const eduCards = document.querySelectorAll(".eduCard");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeUp 0.9s ease-out forwards";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

eduCards.forEach(card => {
    // Ensure initial state
    card.style.opacity = 0;
    card.style.transform = "translateY(24px)";
    observer.observe(card);
});
