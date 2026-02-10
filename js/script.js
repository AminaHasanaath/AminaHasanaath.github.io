document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     MOBILE NAV
  ============================= */
  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (mobileToggle && mobileNav) {
    // Ensure mobile nav is hidden initially
    mobileNav.classList.add("hidden");

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle("hidden");
      document.body.style.overflow =
        mobileNav.classList.contains("hidden") ? "auto" : "hidden";
    });

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

  /* =============================
     EXPLORE PANEL
  ============================= */
  const navToggle = document.getElementById("navToggle");
  const navPanel = document.getElementById("navPanel");

  if (navToggle && navPanel) {
    navPanel.classList.add("hidden"); // Ensure hidden initially

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

  /* =============================
     SCROLL PROGRESS
  ============================= */
  const progress = document.getElementById("scroll-progress");
  if (progress) {
    window.addEventListener("scroll", () => {
      const percent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      progress.style.width = percent + "%";
    });
  }

  /* =============================
     SCROLL TO TOP
  ============================= */
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("hidden", window.scrollY < 400);
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =============================
     TYPED.JS (SAFE)
  ============================= */
  const typedEl = document.getElementById("typed-name");
  if (window.Typed && typedEl) {
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

  /* =============================
     AOS
  ============================= */
  if (window.AOS) {
    AOS.init({ duration: 900, once: true });
  }

});
