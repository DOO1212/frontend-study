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

// 페이지 최상단 이동
const totopEl = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
// console.log(window.scrollY); // Y축 스크롤 위치

// 페이지 스크롤 위치가
// 500px을 넘으면 요소를 보이고
// 500px을 넘지 않으면 요소 숨기기
if (window.scrollY > 500) {
  // 요소 보이기
  totopEl.style.opacity = 1;
  totopEl.style.transform = 'translateX(0)';
} else {
  // 요소 숨기기
  totopEl.style.opacity = 0;
  totopEl.style.transform = 'translateX(100px)';
}
});