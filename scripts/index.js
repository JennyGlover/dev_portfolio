const lightSwitch = document.querySelector(".switch");
const page = document.querySelector(".page");
const paragraphs = document.querySelector("p");
const pageLinks = document.querySelectorAll("a");
const navBar = document.querySelector(".header__nav");
const navIcons = document.querySelectorAll(".header__icon");
const logo = document.querySelector(".nav__logo");
const dayImage = document.querySelector(".switch__day-image");
const nightImage = document.querySelector(".switch__night-image");

function toggleLight() {
  dayImage.classList.toggle("switch__image-off");
  nightImage.classList.toggle("switch__image-off");

  if (dayImage.classList.contains("switch__image-off")) {
    page.style.background =
      "url('../images//iStock-1065181392.jpg') rgba(0, 0, 0, 0.9)";
    page.style.backgroundBlendMode = "darken, luminosity";
    page.style.backgroundSize = "cover";
    page.style.backgroundRepeat = "no-repeat";
    page.style.color = "white";
    pageLinks.forEach((link) => {
      link.style.color = "white";
    });
    console.log(navIcons);
    navIcons.forEach((icon) => {
      icon.style.filter = "invert(1)";
    });
    //logo.style.filter = "invert(1)";
  } else if (!dayImage.classList.contains("switch__image-off")) {
    page.style.backgroundImage = "none";

    page.style.backgroundColor = "rgb(255, 250, 250)";
    page.style.color = " rgb(42, 42, 42)";
    pageLinks.forEach((link) => {
      link.style.color = "rgb(42, 42, 42)";
    });
    navIcons.forEach((icon) => {
      icon.style.filter = "invert(0)";
    });
    //logo.style.filter = "invert(0)";
  }
}

lightSwitch.addEventListener("click", toggleLight);
