import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

// const swiper = new Swiper(".my", {
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 2,
//   //   slidesPerGroup: 2,
//   navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
//   mousewheel: true,
// });
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
