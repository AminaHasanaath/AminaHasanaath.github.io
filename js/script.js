// =============================
// INIT MOBILE NAV FUNCTION
// =============================
function initMobileNav() {
  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (!mobileToggle || !mobileNav) return;

  // Ensure hidden initially
  mobileNav.classList.add("hidden");

  // Toggle mobile nav
  mobileToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle("hidden");
    document.body.style.overflow =
      mobileNav.classList.contains("hidden") ? "auto" : "hidden";
  });

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (
      !mobileNav.classList.contains("hidden") &&
      !mobileNav.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      mobileNav.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
}

// =============================
// INIT EXPLORE PANEL FUNCTION
// =============================
function initExplorePanel() {
  const navToggle = document.getElementById("navToggle");
  const navPanel = document.getElementById("navPanel");

  if (!navToggle || !navPanel) return;

  navPanel.classList.add("hidden"); // hidden initially

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navPanel.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    if (!navPanel.classList.contains("hidden")) {
      navPanel.classList.add("hidden");
    }
  });

  navPanel.addEventListener("click", (e) => e.stopPropagation());
}

// =============================
// INIT SCROLL PROGRESS
// =============================
function initScrollProgress() {
  const progress = document.getElementById("scroll-progress");
  if (!progress) return;

  window.addEventListener("scroll", () => {
    const percent =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    progress.style.width = percent + "%";
  });
}

// =============================
// INIT SCROLL TO TOP BUTTON
// =============================
function initScrollTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  // Show button after scrolling 400px
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("hidden", window.scrollY < 400);
  });

  // Scroll to top smoothly
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =============================
// INIT TYPED.JS
// =============================
function initTyped() {
  const typedEl = document.getElementById("typed-name");
  if (!typedEl || !window.Typed) return;

  new Typed("#typed-name", {
    strings: [
      "I'm Amina Hasanaath",
      "Computer Science Engineer",
      "Clarity-driven Programmer",
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: false,
  });
}

// =============================
// INIT AOS
// =============================
function initAOS() {
  if (window.AOS) AOS.init({ duration: 900, once: true });
}

// =============================
// MAIN DOM CONTENT LOADED
// =============================
document.addEventListener("DOMContentLoaded", () => {
  // Wait for navbar/footer to load if using components.js
  // Run mobile nav and explore panel after navbar is injected
  if (window.initNavbar) {
    initMobileNav();
    initExplorePanel();
  } else {
    // Fallback: try init after a small delay
    setTimeout(() => {
      initMobileNav();
      initExplorePanel();
    }, 100);
  }

  // Initialize other features
  initScrollProgress();
  initScrollTop();
  initTyped();
  initAOS();

  // Initialize lucide icons globally
  if (window.lucide) lucide.createIcons();
});
