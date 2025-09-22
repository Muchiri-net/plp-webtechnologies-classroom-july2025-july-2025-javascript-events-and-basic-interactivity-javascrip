//   Event Handling
// Toggle Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//  Interactive Elements
// Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Toggle
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// Form Validation
const form = document.getElementById("signupForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email address";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
