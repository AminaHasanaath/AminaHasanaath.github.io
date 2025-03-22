// ✅ Social Media Button Click Events
const githubBtn = document.getElementById("github-btn");
const linkedinBtn = document.getElementById("linkedin-btn");

if (githubBtn) {
  githubBtn.addEventListener("click", function () {
    window.open("https://github.com/AminaHasanaath", "_blank");
  });
}

if (linkedinBtn) {
  linkedinBtn.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/amina-hasanaath-7033a1309", "_blank");
  });
}

// ✅ Modal Handling for Project Details
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeModalBtn = document.getElementById("close-modal");

if (modal) {
  document.querySelectorAll(".view-more-btn").forEach((button) => {
    button.addEventListener("click", function () {
      modalTitle.textContent = this.getAttribute("data-title");
      modalDescription.textContent = this.getAttribute("data-description");
      modalLink.href = this.getAttribute("data-link");
      modal.classList.remove("hidden");
    });
  });

  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

// ✅ Contact Form Handling
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    fetch(this.action, {
      method: this.method,
      body: new FormData(this),
      headers: { "Accept": "application/json" }
    }).then(response => {
      if (response.ok) {
        successMessage.classList.remove("hidden");
        this.reset();
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 3000);
      }
    }).catch(error => console.error("Error:", error));
  });
}
