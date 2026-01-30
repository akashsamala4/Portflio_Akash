// Show welcome message
function showMessage() {
  alert("Welcome to Akash's Portfolio Website!");
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Form validation
function validateForm(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email");
    return false;
  }

  if (message.length < 5) {
    alert("Message must be at least 5 characters");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
