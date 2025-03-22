// Social Media Button Click Events
document.getElementById("github-btn").addEventListener("click", function () {
  window.open("https://github.com/your-profile", "_blank");
});
document.getElementById("linkedin-btn").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/amina-hasanaath-7033a1309", "_blank");
});
document.getElementById("email-btn").addEventListener("click", function () {
  window.location.href = "mailto:your-email@example.com";
});

// Modal Handling
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeModalBtn = document.getElementById("close-modal");

// Add event listeners to all "View More" buttons
document.querySelectorAll(".view-more-btn").forEach((button) => {
  button.addEventListener("click", function () {
    modalTitle.textContent = this.getAttribute("data-title");
    modalDescription.textContent = this.getAttribute("data-description");
    modalLink.href = this.getAttribute("data-link");
    modal.classList.remove("hidden");
  });
});

// Close modal when clicking the close button
closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// Close modal when clicking outside it
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
