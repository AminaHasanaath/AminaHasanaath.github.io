// /*document.addEventListener("DOMContentLoaded", () => {

//   /* =============================
//      EXPLORE BUTTON / COMMAND PANEL
//   ============================= */
//   const navToggle = document.getElementById("navToggle");
//   const navPanel = document.getElementById("navPanel");

//   /* =============================
//      CONNECT DROPDOWN
//   ============================= */
//   const connectBtn = document.getElementById("connectBtn");
//   const connectDropdown = document.getElementById("connectDropdown");

//   // 🔒 Helper: close all dropdowns
//   const closeAll = () => {
//     if (navPanel) navPanel.classList.add("hidden");
//     if (connectDropdown) connectDropdown.classList.add("hidden");
//   };

//   /* ===== EXPLORE ===== */
//   if (navToggle && navPanel) {
//     navToggle.addEventListener("click", (e) => {
//       e.stopPropagation();
//       closeAll();
//       navPanel.classList.toggle("hidden");
//     });
//     navPanel.addEventListener("click", (e) => e.stopPropagation());
//   }

//   /* ===== CONNECT ===== */
//   if (connectBtn && connectDropdown) {
//     connectBtn.addEventListener("click", (e) => {
//       e.stopPropagation();
//       closeAll();
//       connectDropdown.classList.toggle("hidden");
//     });
//     connectDropdown.addEventListener("click", (e) => e.stopPropagation());
//   }

//   /* ===== MOBILE NAV ===== */
//   const mobileNavToggle = document.getElementById("mobileNavToggle");
//   const mobileNav = document.getElementById("mobileNav");

//   if (mobileNavToggle && mobileNav) {
//     // Toggle mobile menu on hamburger click
//     mobileNavToggle.addEventListener("click", (e) => {
//       e.stopPropagation();
//       mobileNav.classList.toggle("hidden");
//       mobileNavToggle.setAttribute("aria-expanded", !mobileNav.classList.contains("hidden"));
//     });

//     // Clicking outside closes the mobile menu
//     document.addEventListener("click", (e) => {
//       if (!mobileNav.classList.contains("hidden") && !mobileNavToggle.contains(e.target) && !mobileNav.contains(e.target)) {
//         mobileNav.classList.add("hidden");
//         mobileNavToggle.setAttribute("aria-expanded", "false");
//       }
//     });

//     // Optional: close menu on ESC key
//     document.addEventListener("keydown", (e) => {
//       if (e.key === "Escape" && !mobileNav.classList.contains("hidden")) {
//         mobileNav.classList.add("hidden");
//         mobileNavToggle.setAttribute("aria-expanded", "false");
//       }
//     });

//     // Make links clickable and close menu after clicking
//     mobileNav.querySelectorAll("a").forEach(link => {
//       link.addEventListener("click", (e) => {
//         // Step 1: allow link to work normally
//         // Step 3: close the mobile menu
//         mobileNav.classList.add("hidden");
//         mobileNavToggle.setAttribute("aria-expanded", "false");
//       });
//     });
//   }

//   /* =============================
//      SCROLL PROGRESS
//   ============================= */
//   const scrollProgress = document.getElementById("scroll-progress");
//   if (scrollProgress) {
//     window.addEventListener("scroll", () => {
//       const percent =
//         (window.scrollY /
//           (document.documentElement.scrollHeight - window.innerHeight)) *
//         100;
//       scrollProgress.style.width = percent + "%";
//     });
//   }

//   /* =============================
//      SCROLL TO TOP
//   ============================= */
//   const scrollTopBtn = document.getElementById("scrollTopBtn");
//   if (scrollTopBtn) {
//     window.addEventListener("scroll", () => {
//       scrollTopBtn.classList.toggle("hidden", window.scrollY < 400);
//     });

//     scrollTopBtn.addEventListener("click", () => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     });
//   }

//   /* =============================
//      TYPED.JS
//   ============================= */
//   if (typeof Typed !== "undefined") {
//     new Typed("#typed-name", {
//       strings: [
//         "I'm Amina Hasanaath",
//         "Pursuing Bachelors of CS - Engineering",
//         "Clarity-driven Programmer",
//       ],
//       typeSpeed: 80,
//       backSpeed: 40,
//       loop: false,
//     });
//   }

//   /* =============================
//      AOS
//   ============================= */
//   if (typeof AOS !== "undefined") {
//     AOS.init({ duration: 900, once: true });
//   }

// });

// /* =============================
//    LUCIDE ICONS INIT
// ============================= */
// if (typeof lucide !== "undefined") {
//   lucide.createIcons();
// }
document.addEventListener("DOMContentLoaded", () => {

  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
      document.body.style.overflow =
        mobileNav.classList.contains("hidden") ? "auto" : "hidden";
    });
  }

  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("hidden", window.scrollY < 400);
    });
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const progress = document.getElementById("scroll-progress");
  if (progress) {
    window.addEventListener("scroll", () => {
      progress.style.width =
        (window.scrollY /
          (document.documentElement.scrollHeight - innerHeight)) * 100 + "%";
    });
  }

  if (window.AOS) AOS.init({ duration: 900, once: true });
});

