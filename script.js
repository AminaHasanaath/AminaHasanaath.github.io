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
document.querySelectorAll(".floating").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = (rect.width / 2 - x) / 20;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
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
