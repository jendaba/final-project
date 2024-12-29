// menu script

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  const isXmark = hamburgerIcon.classList.toggle("fa-xmark");
  hamburgerIcon.classList.toggle("fa-bars", !isXmark);
  menuList.style.display = isXmark ? "block" : "none";
});

// form script

const form = document.querySelector("#registration-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector("#error-message");
const submitButton = form.querySelector(".submit-btn");

const validatePasswords = () => {
  if (password.value === confirmPassword.value && password.value !== "") {
    errorMessage.textContent = "";
    submitButton.disabled = false;
  } else {
    errorMessage.textContent = "Hesla se neshodují";
    submitButton.disabled = true;
  }
};

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Registrace proběhla úspěšně!");
});
