const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  const isXmark = hamburgerIcon.classList.toggle("fa-xmark");
  hamburgerIcon.classList.toggle("fa-bars", !isXmark);
  menuList.style.display = isXmark ? "block" : "none";
});
