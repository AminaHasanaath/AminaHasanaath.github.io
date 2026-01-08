/* Typed.js */
new Typed("#typed-name", {
  strings: [
    "I'm Amina Hasanaath",
    "A Tech Geek",
    "Upcoming Backend Developer",
    "believes, There's no right way to do the right thing"
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: false,
  showCursor: true,
  cursorChar: '|'
});

/* AOS */
AOS.init({ duration: 800, once: true });

/* Scroll to top */
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("hidden", window.scrollY < 300);
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* Floating cards tilt */
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    // ONLY prevent default for hash links
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
    } else {
      return; // allow normal page navigation
    }

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition = target.offsetTop - 80;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

/* Navbar active section highlight */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-accent");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-accent");
    }
  });
});

/* Mobile menu toggle */
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

/* Smooth scroll offset */
const OFFSET = 80;
document.querySelectorAll("a.nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - OFFSET,
        behavior: "smooth"
      });
    }
    menu.classList.add("hidden");
  });
});
