const  savedPassword = localStorage.getItem("password");
const hash = window.location.hash;

const mainContainer = document.getElementById("main-container");
const formContainer = document.getElementById("form-container");
const pageTitle = document.getElementById("page-title");

if (hash === "#register" || !savedPassword) {
  document.title = "PLEXILE Movies - Register";
  pageTitle.textContent = "Register";
  mainContainer.className = "container register-mode";
  formContainer.innerHTML = `
    <div class="form-input">
      <i class="bx bx-lock-open-alt input-icon"></i>
      <input type="password" id="password" placeholder="Set Password" required>
    </div>
    <button id="register-btn">Register</button>
  `;
  document
    .getElementById("register-btn")
    .addEventListener("click", function () {
      const password = document.getElementById("password").value;

      if (password) {
        localStorage.setItem("password", btoa(password));
        alert("Password set successfully. Redirecting to login...");
        window.location.href = "/login.html";
      } else {
        alert("Please enter a password.");
      }
    });
} else {
  document.title = "PLEXILE Movies - Login";
  pageTitle.textContent = "Login";
  mainContainer.className = "container login-mode";
  formContainer.innerHTML = `
    <div class="form-input">
      <i class="bx bx-lock-open-alt input-icon"></i>
      <input type="password" id="password" placeholder="Enter Password" required>
    </div>
    <button id="login-btn">Login</button>
  `;
  document
    .getElementById("login-btn")
    .addEventListener("click", function () {
      const password = document.getElementById("password").value;

      if (btoa(password) === savedPassword) {
        sessionStorage.setItem("loggedIn", true);
        alert("Login successful. Redirecting.");
        const redirectPath =
          sessionStorage.getItem("redirectAfterLogin") || "/";
        window.location.href = redirectPath;
      } else {
        alert("Incorrect password. Please try again.");
      }
    });
}