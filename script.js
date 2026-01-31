document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     EXPLORE BUTTON / COMMAND PANEL
  ============================= */
 /* =============================
   EXPLORE BUTTON / COMMAND PANEL
============================= */
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");

if (navToggle && navPanel) {

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = !navPanel.classList.contains("hidden");

    // Always close first
    navPanel.classList.add("hidden");

    // Then open only if it was closed
    if (!isOpen) {
      navPanel.classList.remove("hidden");
    }
  });

  // Clicking inside panel should NOT close it
  navPanel.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Click anywhere outside → close
  document.addEventListener("click", () => {
    navPanel.classList.add("hidden");
  });

  // Ctrl + K shortcut
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
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =============================
     TYPED.JS
  ============================= */
  if (document.querySelector("#typed-name") && typeof Typed !== "undefined") {
    new Typed("#typed-name", {
      strings: [
        "I'm Amina Hasanaath",
        "Pursuing Bachelors of CS - Engineering",
        "Clarity-driven Programmer"
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
    AOS.init({ duration: 900, once: true });
  }

/* =============================
   CONTACT & CONNECT DROPDOWNS
============================= */
const contactBtn = document.getElementById("contactBtn");
const contactMenu = document.getElementById("contactMenu");
const connectBtn = document.getElementById('connectBtn');
const connectDropdown = document.getElementById('connectDropdown');

if (contactBtn && contactMenu) {
  contactBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    contactMenu.classList.toggle("hidden");
  });

  // 👇 ADD THIS
  contactMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

if (connectBtn && connectDropdown) {
  connectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    connectDropdown.classList.toggle('hidden');
  });

  // 👇 ADD THIS
  connectDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  if (contactMenu) contactMenu.classList.add('hidden');
  if (connectDropdown) connectDropdown.classList.add('hidden');
});
