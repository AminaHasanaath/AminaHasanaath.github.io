/* ================================
   INITIAL LOAD
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* Lucide Icons */
  if (window.lucide) {
    lucide.createIcons();
  }

  /* AOS */
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 120
  });

  /* Typed.js */
  new Typed("#typed-name", {
    strings: ["Amina Hasanaath", "Backend Developer", "Clarity-driven Programmer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
    smartBackspace: true
  });

  initScrollEffects();
  initNavPanel();
  initLeetCodeCounters();
});


/* ================================
   SCROLL EFFECTS (SMOOTH + OPTIMIZED)
================================ */
function initScrollEffects() {
  const progressBar = document.getElementById("scroll-progress");
  const scrollBtn = document.getElementById("scrollTopBtn");

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = `${progress}%`;

        if (scrollTop > 400) {
          scrollBtn.classList.remove("hidden");
        } else {
          scrollBtn.classList.add("hidden");
        }

        ticking = false;
      });
      ticking = true;
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* ================================
   COMMAND PALETTE / EXPLORE BUTTON
================================ */
function initNavPanel() {
  const toggleBtn = document.getElementById("navToggle");
  const panel = document.getElementById("navPanel");

  toggleBtn.addEventListener("click", () => {
    panel.classList.toggle("hidden");
    panel.classList.toggle("scale-95");
  });

  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
      panel.classList.add("hidden");
    }
  });
}


/* ================================
   LEETCODE COUNTERS (SMOOTH ANIMATED)
================================ */
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  let startTime = null;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(easeOut * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initLeetCodeCounters() {
  const counters = [
    { id: "lc-streak", value: 85 },
    { id: "lc-solved", value: 150 },
    { id: "lc-badges", value: 6 },
    { id: "lc-rank", value: 120000 }
  ];

  const section = document.getElementById("leetcode");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        counters.forEach(item => {
          const el = document.getElementById(item.id);
          if (el && el.textContent === "0") {
            animateCounter(el, item.value);
          }
        });
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
}
