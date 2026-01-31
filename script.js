
document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     EXPLORE BUTTON / COMMAND PANEL
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
      navPanel.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        navPanel.classList.toggle("hidden");
      }
    });
  }

  /* =============================
     SCROLL PROGRESS BAR
  ============================= */
  const scrollProgress = document.getElementById("scroll-progress");
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = percent + "%";
    });
  }

  /* =============================
     SCROLL TO TOP BUTTON
  ============================= */
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove("hidden");
      } else {
        scrollTopBtn.classList.add("hidden");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* =============================
     TYPED.JS
  ============================= */
  if (document.querySelector("#typed-name") && typeof Typed !== "undefined") {
    new Typed("#typed-name", {
      strings: [
        "I'm Amina Hasanaath",
        "Persuing Bachelors of CS - Engineering",
        "Clarity driven Programmer",
        ,
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });
  }

  /* =============================
     AOS
  ============================= */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      once: true,
    });
  }

  /* =============================
     MOBILE MENU
  ============================= */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
/* =============================
     CONTACT DROPDOWN (FIXED)
  ============================= */
  const contactBtn = document.getElementById("contactBtn");
  const contactMenu = document.getElementById("contactMenu");

  if (contactBtn && contactMenu) {

    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      contactMenu.classList.toggle("hidden");
    });

    // allow clicks inside dropdown (links clickable)
    contactMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // close when clicking outside
    document.addEventListener("click", () => {
      contactMenu.classList.add("hidden");
    });
  }

});
