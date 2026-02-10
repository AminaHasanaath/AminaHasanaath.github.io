/* =============================
   NAVBAR LOGIC (GLOBAL)
============================= */
window.initNavbar = function () {

  /* ===== MOBILE NAV ===== */
  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (mobileToggle && mobileNav) {
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

  /* ===== EXPLORE PANEL ===== */
  const navToggle = document.getElementById("navToggle");
  const navPanel = document.getElementById("navPanel");

  if (navToggle && navPanel) {
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
};

/* =============================
   GLOBAL PAGE UI
============================= */
document.addEventListener("DOMContentLoaded", () => {

  /* SCROLL PROGRESS */
  const progress = document.getElementById("scroll-progress");
  if (progress) {
    window.addEventListener("scroll", () => {
      progress.style.width =
        (window.scrollY /
          (document.documentElement.scrollHeight - innerHeight)) *
          100 +
        "%";
    });
  }

  /* SCROLL TO TOP */
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("hidden", window.scrollY < 400);
    });

    scrollBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* TYPED */
  if (window.Typed && document.getElementById("typed-name")) {
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

  if (window.AOS) AOS.init({ duration: 900, once: true });
});
