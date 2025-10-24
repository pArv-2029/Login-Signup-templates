const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const mainContainer = document.querySelector(".container");

// Toggle between forms
signupBtn.addEventListener("click", () => {
  mainContainer.classList.add("change");
});

signinBtn.addEventListener("click", () => {
  mainContainer.classList.remove("change");
});

// Show/Hide Password logic for Signup
const signupShowPwd = document.getElementById("signup-show-password");
const signupPwd = document.querySelector('.signup-form input[name="password"]');
const signupConfirmPwd = document.querySelector('.signup-form input[name="confirm_password"]');
signupShowPwd.addEventListener("change", function() {
  const type = this.checked ? "text" : "password";
  signupPwd.type = type;
  signupConfirmPwd.type = type;
});

// Show/Hide Password logic for Signin
const signinShowPwd = document.getElementById("signin-show-password");
const signinPwd = document.querySelector('.signin-form input[name="password"]');
signinShowPwd.addEventListener("change", function() {
  signinPwd.type = this.checked ? "text" : "password";
});

// Alert on successful signin/signup and redirect back to same page
const signupForm = document.querySelector('.signup-form form');
const signinForm = document.querySelector('.signin-form form');

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = signupForm.querySelector('input[name="username"]').value;
  alert(username + " has successfully signed up");
  // Redirect to current page, reload effectively
  window.location.href = window.location.href;
});

signinForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = signinForm.querySelector('input[name="username"]').value;
  alert(username + " has successfully logged in");
  // Redirect to current page, reload effectively
  window.location.href = window.location.href;
});
