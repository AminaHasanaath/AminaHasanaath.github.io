/* =====================================
   Typed.js
===================================== */
new Typed("#typed-name", {
  strings: [
    "I'm Amina Hasanaath",
    "AI + Backend System Engineer",
    "Smart & Creative",
    "I strive for a purposeful life"
  ],
  typeSpeed: 80,
  backSpeed: 40,
  loop: false,
  showCursor: true,
  cursorChar: "|"
});

/* =====================================
   AOS
===================================== */
AOS.init({
  duration: 900,
  once: true
});

/* =====================================
   Scroll Progress Bar
===================================== */
const scrollProgress = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

/* =====================================
   Mobile Menu Toggle
===================================== */
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/* =====================================
   Floating Command Palette
===================================== */
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");

// Toggle palette on click
navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navPanel.classList.toggle("hidden");
});

// Prevent clicks inside panel from closing it
navPanel.addEventListener("click", (e) => e.stopPropagation());

// Close when clicking outside
document.addEventListener("click", () => navPanel.classList.add("hidden"));

// Ctrl / Cmd + K shortcut
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    navPanel.classList.toggle("hidden");
  }
});

/* =====================================
   Scroll To Top Button
===================================== */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollTopBtn.classList.remove("hidden");
  else scrollTopBtn.classList.add("hidden");
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
