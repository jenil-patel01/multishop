document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  // Hide all errors initially
  usernameError.style.display = "none";
  passwordError.style.display = "none";

  let valid = true;

  // Username validation
  if (!username) {
    usernameError.textContent = "Username is required.";
    usernameError.style.display = "block";
    valid = false;
  }

  // Password validation
  if (!password) {
    passwordError.textContent = "Password is required.";
    passwordError.style.display = "block";
    valid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordError.style.display = "block";
    valid = false;
  }

  if (valid) {
    // You can replace this with real login logic
    alert("Login successful! (client-side only)");
  }
});
