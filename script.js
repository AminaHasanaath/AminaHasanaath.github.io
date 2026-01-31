/* =============================
   TYPED.JS NAME ANIMATION
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed("#typed-name", {
    strings: ["Amina Hasanaath"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});

/* =============================
   AOS INIT
============================= */
AOS.init({
  duration: 1000,
  once: true,
});

/* =============================
   CONTACT DROPDOWN
============================= */
const contactBtn = document.getElementById("contactBtn");
const contactMenu = document.getElementById("contactMenu");

if (contactBtn && contactMenu) {
  contactBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    contactMenu.classList.toggle("hidden");
  });

  // Prevent closing when clicking inside dropdown
  contactMenu.addEventListener("click", (e) => e.stopPropagation());

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!contactMenu.classList.contains("hidden") && !e.target.closest("#contactMenu a")) {
      contactMenu.classList.add("hidden");
    }
  });
}

/* =============================
   SCROLL TO TOP BUTTON
============================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  // Toggle visibility
  if (window.scrollY > 300) scrollTopBtn.classList.remove("hidden");
  else scrollTopBtn.classList.add("hidden");

  // Scroll progress bar
  const scrollProgress = document.getElementById("scroll-progress");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =============================
   NAV PANEL / EXPLORE BUTTON
============================= */
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");

if (navToggle && navPanel) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navPanel.classList.toggle("hidden");
  });

  navPanel.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    if (!navPanel.classList.contains("hidden")) navPanel.classList.add("hidden");
  });
}

/* =============================
   OPTIONAL: OPEN EXTERNAL LINKS IN NEW TAB
============================= */
const externalLinks = document.querySelectorAll("#contactMenu a[target='_blank']");
externalLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    // Ensures proper behavior even if JS tries to toggle
    window.open(link.href, "_blank");
  });
});
