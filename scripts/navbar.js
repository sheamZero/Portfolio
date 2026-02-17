const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");

const desktopLinks = document.querySelectorAll(".menuContainer nav a");
const sidebarLinks = document.querySelectorAll("#sidebar nav a");
const allLinks = [...desktopLinks, ...sidebarLinks];

const sections = document.querySelectorAll("section");

// ------------------------------
// Sidebar toggle (unchanged)
// ------------------------------
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});

// ------------------------------
// Helper: remove all active
// ------------------------------
function clearActiveLinks() {
  allLinks.forEach(link => link.classList.remove("active"));
}

// ------------------------------
// Click → set active
// ------------------------------
allLinks.forEach(link => {
  link.addEventListener("click", function () {
    clearActiveLinks();

    const target = this.getAttribute("href");

    // desktop + sidebar same link active
    allLinks.forEach(l => {
      if (l.getAttribute("href") === target) {
        l.classList.add("active");
      }
    });
  });
});

// ------------------------------
// Scroll → set active
// ------------------------------
window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (currentSectionId) {
    clearActiveLinks();

    allLinks.forEach(link => {
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }
});
