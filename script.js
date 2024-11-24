// Gets the current page's filename from the URL
const currentPage = window.location.pathname.split("/").pop();

// Selects all navbar links
const navLinks = document.querySelectorAll(".nav_bar a");

// Loops through the links and add the "active" class to the link that matches the current page
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Get the login button and add a click event listener
const loginButton = document.querySelector(".login");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    window.location.href = "login.html"; // Navigate to login.html
  });
}

// Prevent 'active' class on login button when on login.html
if (currentPage === "login.html") {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === "login.html") {
      link.classList.remove("active");
    }
  });
}

// Free Therapy Booking Code
// Get all form inputs and the submit button
const form = document.getElementById("therapyForm");
const inputs = form.querySelectorAll("input[required]");
const bookNowBtn = document.getElementById("bookNow");
const confirmationBar = document.getElementById("confirmationBar");
const confirmationMessage = document.getElementById("confirmationMessage");
const cancelBooking = document.getElementById("cancelBooking");

// Function to check if all required fields are filled
function checkRequiredFields() {
  let allFilled = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      allFilled = false;
    }
  });
  bookNowBtn.disabled = !allFilled;
}

// Add 'input' event listeners to each input field to check if all fields are filled
inputs.forEach((input) => {
  input.addEventListener("input", checkRequiredFields);
});

// Form submit handler to display booking information
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  const fullName = document.getElementById("fullname").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  confirmationMessage.textContent = `${fullName}, you have a therapy on ${date}, at ${time}, in ${location}. So make sure to attend the therapy.`;

  // Display the confirmation bar
  confirmationBar.classList.remove("hidden");
});

// Cancel booking button handler
cancelBooking.addEventListener("click", function () {
  confirmationBar.classList.add("hidden");
});
