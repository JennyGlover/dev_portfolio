const lightSwitch = document.querySelector(".switch");
const page = document.querySelector(".page");
const paragraphs = document.querySelector("p");
const pageLinks = document.querySelectorAll("a");
const navBar = document.querySelector(".nav");
const navIcons = document.querySelectorAll(".nav__icon");
const dayLogo = document.querySelector(".nav__day-logo-link");
const nightLogo = document.querySelector(".nav__night-logo-link");
const dayImage = document.querySelector(".switch__day-image");
const nightImage = document.querySelector(".switch__night-image");

function scrollSmoothly() {
  let smoothScrolls = document.querySelectorAll(".smoothScroll");

  for (let i = 0; i < smoothScrolls.length; i++) {
    let windowHeight = window.innerHeight;
    let sectionTop = smoothScrolls[i].getBoundingClientRect().top;
    let sectionVisible = 150;

    if (sectionTop < windowHeight - sectionVisible) {
      smoothScrolls[i].classList.add("active");
    } else {
      smoothScrolls[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scrollSmoothly);

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
