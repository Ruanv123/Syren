/*======== Menu Responsivo ========*/
const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

const searchBar = document.querySelector(
  ".mobile-search-container .search-bar"
);
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(
  ".mobile-search-container .cancel-btn"
);

searchInput.addEventListener("click", () => {
  searchBar.classList.add("active");
  nav.classList.add("move-up");
  desktopNav.classList.add("move-down");
});

cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
  nav.classList.remove("move-up");
  desktopNav.classList.remove("move-down");
});

/*======== SWIPER ========*/
 /* let swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
}); */ 

let swiper = new Swiper('.swiper', {
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
})
/*======== SWIPER ========*/

/* var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@0.80": {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    "@1.20": {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
}); */
/*======== DROPDOWN FOOTER ========*/
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
