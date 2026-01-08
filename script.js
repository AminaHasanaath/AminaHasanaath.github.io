document.addEventListener("DOMContentLoaded", () => {
  /* =====================================
     Dino Auto Runner
  ===================================== */
  const dino = document.getElementById("dino");
  const dinoGame = document.getElementById("dino-game");
  let dinoJumping = false;

  function jump() {
    if (dinoJumping) return;
    dinoJumping = true;
    let pos = 0;
    const up = setInterval(() => {
      if (pos >= 80) { // jump height
        clearInterval(up);
        const down = setInterval(() => {
          if (pos <= 0) {
            clearInterval(down);
            dinoJumping = false;
          }
          pos -= 5;
          dino.style.bottom = pos + "px";
        }, 20);
      }
      pos += 5;
      dino.style.bottom = pos + "px";
    }, 20);
  }

  // Jump on space
  document.addEventListener("keydown", e => { if (e.code === "Space") jump(); });

  // Multiple cactus spawning
  function createCactus() {
    const cactus = document.createElement("div");
    cactus.classList.add("cactus");
    dinoGame.appendChild(cactus);

    let cactusPos = window.innerWidth;
    const speed = 6 + Math.random() * 2; // random speed 6-8

    function move() {
      cactusPos -= speed;
      cactus.style.right = cactusPos + "px";

      // Collision detection
      const dinoRect = dino.getBoundingClientRect();
      const cactusRect = cactus.getBoundingClientRect();
      if (
        dinoRect.right > cactusRect.left &&
        dinoRect.left < cactusRect.right &&
        dinoRect.bottom > cactusRect.top
      ) {
        console.log("Game Over!");
        // Optional: Add reset or stop animation
      }

      if (cactusPos < -50) {
        cactus.remove();
      } else {
        requestAnimationFrame(move);
      }
    }

    move();

    // Spawn next cactus randomly
    setTimeout(createCactus, 1500 + Math.random() * 2000);
  }

  createCactus();

  /* =====================================
     Scroll To Top Arrow
  ===================================== */
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove("hidden");
      } else {
        scrollTopBtn.classList.add("hidden");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =====================================
     Typed.js
  ===================================== */
  if (document.querySelector("#typed-name")) {
    new Typed("#typed-name", {
      strings: [
        "I'm Amina Hasanaath",
        "AI + Backend System Engineer",
        "Smart & Creative",
        "I strive for a purposeful life"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: false,
      showCursor: true,
      cursorChar: "|"
    });
  }

  /* =====================================
     AOS
  ===================================== */
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 900, once: true });
  }

  /* =====================================
     Scroll Progress Bar
  ===================================== */
  const scrollProgress = document.getElementById("scroll-progress");

  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + "%";
    });
  }

  /* =====================================
     Mobile Menu Toggle
  ===================================== */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* =====================================
     Command Palette (Explore Button)
  ===================================== */
  const navToggle = document.getElementById("navToggle");
  const navPanel = document.getElementById("navPanel");

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navPanel.classList.toggle("hidden");
    });

    navPanel.addEventListener("click", (e) => {
      e.stopPropagation();
    });

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
});
