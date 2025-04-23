// SWIPER
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  autoplay: { delay: 5000 },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});