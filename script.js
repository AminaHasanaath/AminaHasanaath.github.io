document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     EXPLORE BUTTON / COMMAND PANEL
  ============================= */
  const navToggle = document.getElementById("navToggle");
  const navPanel = document.getElementById("navPanel");

  /* =============================
     CONTACT DROPDOWN
  ============================= */
  const contactBtn = document.getElementById("contactBtn");
  const contactMenu = document.getElementById("contactMenu");

  /* =============================
     CONNECT DROPDOWN
  ============================= */
  const connectBtn = document.getElementById("connectBtn");
  const connectDropdown = document.getElementById("connectDropdown");

  // 🔒 Helper: close all dropdowns
  const closeAll = () => {
    if (navPanel) navPanel.classList.add("hidden");
    if (contactMenu) contactMenu.classList.add("hidden");
    if (connectDropdown) connectDropdown.classList.add("hidden");
  };

  /* ===== EXPLORE ===== */
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAll();
      navPanel.classList.toggle("hidden");
    });

    navPanel.addEventListener("click", (e) => e.stopPropagation());
  }

  /* ===== CONTACT ===== */
  if (contactBtn && contactMenu) {
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAll();
      contactMenu.classList.toggle("hidden");
    });

    contactMenu.addEventListener("click", (e) => e.stopPropagation());
  }

  /* ===== CONNECT ===== */
  if (connectBtn && connectDropdown) {
    connectBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAll();
      connectDropdown.classList.toggle("hidden");
    });

    connectDropdown.addEventListener("click", (e) => e.stopPropagation());
  }

  /* =============================
     CLOSE ON OUTSIDE CLICK
  ============================= */
  document.addEventListener("click", closeAll);

  /* =============================
     SCROLL PROGRESS
  ============================= */
  const scrollProgress = document.getElementById("scroll-progress");
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const percent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      scrollProgress.style.width = percent + "%";
    });
  }

  /* =============================
     SCROLL TO TOP
  ============================= */
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.classList.toggle("hidden", window.scrollY < 400);
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =============================
     TYPED.JS
  ============================= */
  if (typeof Typed !== "undefined") {
    new Typed("#typed-name", {
      strings: [
        "I'm Amina Hasanaath",
        "Pursuing Bachelors of CS - Engineering",
        "Clarity-driven Programmer",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: false,
    });
  }

  /* =============================
     AOS
  ============================= */
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 900, once: true });
  }
});
