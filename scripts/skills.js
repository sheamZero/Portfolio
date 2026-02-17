document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".skillRow");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const row = entry.target;
          const level = row.getAttribute("data-level");
          const fill = row.querySelector(".fill");

          fill.style.width = level + "%";

          // Animate only once
          observer.unobserve(row);
        }
      });
    },
    { threshold: 0.4 }
  );

  rows.forEach(row => observer.observe(row));
});
