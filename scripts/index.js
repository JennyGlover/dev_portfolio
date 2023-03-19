const lightSwitch = document.querySelector(".switch");
const page = document.querySelector(".page");
const paragraphs = document.querySelector("p");
const pageLinks = document.querySelectorAll("a");
const navBar = document.querySelector(".nav");
const navIcons = document.querySelectorAll(".nav__icon");
const dayLogo = document.querySelector(".nav__day-logo");
const nightLogo = document.querySelector(".nav__night-logo");
const dayImage = document.querySelector(".switch__day-image");
const nightImage = document.querySelector(".switch__night-image");

function toggleLight() {
  dayImage.classList.toggle("switch-image-off");
  nightImage.classList.toggle("switch-image-off");

  if (dayImage.classList.contains("switch-image-off")) {
    page.classList.toggle("page-dark-mode");
    navIcons.forEach((icon) => {
      icon.style.filter = "invert(1)";
    });
    dayLogo.classList.toggle("nav-logo-off");
    nightLogo.classList.toggle("nav-logo-off");
    //logo.style.filter = "invert(1)";
  } else if (!dayImage.classList.contains("switch-image-off")) {
    page.classList.toggle("page-dark-mode");
    navIcons.forEach((icon) => {
      icon.style.filter = "invert(0)";
    });
    dayLogo.classList.toggle("nav-logo-off");
    nightLogo.classList.toggle("nav-logo-off");
    //logo.style.filter = "invert(0)";
  }
}

lightSwitch.addEventListener("click", toggleLight);
