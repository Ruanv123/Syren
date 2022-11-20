$(document).ready(function () {
  $(".hamburguer").click(function () {
    $(this).toggleClass("active"), $(".menu").toggleClass("active");
  });
});

const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
selectedTheme &&
  (document.body.classList["dark" === selectedTheme ? "add" : "remove"](
    darkTheme
  ),
  themeButton.classList["ri-moon-line" === selectedIcon ? "add" : "remove"](
    iconTheme
  )),
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme),
      themeButton.classList.toggle(iconTheme),
      localStorage.setItem("selected-theme", getCurrentTheme()),
      localStorage.setItem("selected-icon", getCurrentIcon());
  });
  
const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText("ruanvictormr@gmail.com"),
    (copy.innerHTML = "copied"),
    setTimeout(() => {
      copy.innerHTML = null;
    }, 1e3);
});
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".section__header"),
  sr.reveal(".section__about", { delay: 400 }),
  sr.reveal(".section__skills", { delay: 600 }),
  sr.reveal(".skills__html", { delay: 600 }),
  sr.reveal(".skills__css", { delay: 600 }),
  sr.reveal(".skills__javascript", { delay: 600 }),
  sr.reveal(".skills__sass", { delay: 600 }),
  sr.reveal(".skills__csharp", { delay: 600 }),
  sr.reveal(".skills__mysql", { delay: 600 }),
  sr.reveal(".skills__figma", { delay: 601 }),
  sr.reveal(".skills__tail", { delay: 602 }),
  sr.reveal(".section__projects", { interval: 100, delay: 800 }),
  sr.reveal(".card__project-1", { delay: 700 }),
  sr.reveal(".card__project-2", { delay: 700 }),
  sr.reveal(".card__project-3", { delay: 700 }),
  sr.reveal(".card__project-4", { delay: 700 }),
  sr.reveal(".section__contact", { delay: 720 }),
  sr.reveal(".label__form", { delay: 720 }),
  sr.reveal(".input__name", { delay: 720 }),
  sr.reveal(".input__mail", { delay: 720 }),
  sr.reveal(".input__area", { delay: 720 }),
  sr.reveal(".form__submit", { delay: 721 });
