/* ==============================
   Projects Reveal Animation (Robust)
============================== */

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".projectRow.reveal");

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
        reveals.forEach(el => {
            el.classList.add("visible");
            el.style.transform = "none";
        });
        return;
    }

    // Assign alternating directions safely
    reveals.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add("from-right");
        } else {
            el.classList.add("from-left");
        }
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const index = [...reveals].indexOf(el);

                    el.style.transitionDelay = `${index * 120}ms`;
                    el.classList.add("visible");

                    observer.unobserve(el);
                }
            });
        },
        {
            threshold: 0.25,
            rootMargin: "0px 0px -80px 0px"
        }
    );

    reveals.forEach(el => revealObserver.observe(el));
});
