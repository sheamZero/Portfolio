const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "MERN Stack Developer"
];

const roleText = document.getElementById("role-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function animateRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  roleText.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  // When word is fully typed
  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1200; // pause
    isDeleting = true;
  }

  // When word is fully deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(animateRole, speed);
}

animateRole();
