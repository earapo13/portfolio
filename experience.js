// Get modal elements
const modal = document.getElementById("experience-modal");
const modalContent = document.querySelector(".modal-content");
const closeButton = document.querySelector(".close");

// Get all experience cards
const jobs = document.querySelectorAll(".job");


// Open modal when a card is clicked
jobs.forEach(job => {
  job.addEventListener("click", () => {

    // Copy the hidden modal information into the popup
    const info = job.querySelector(".modal-info").innerHTML;

    modalContent.innerHTML = `
      <span class="close">&times;</span>
      ${info}
    `;

    // Show modal
    modal.style.display = "block";


    // Add close functionality to the new close button
    modalContent.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
    });

  });
});


// Close modal when clicking outside the box
window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});