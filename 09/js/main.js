// SWIPER
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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



// scrollMagic 사용
const scroll = document.querySelectorAll('.scroll-spy')
const controller = new ScrollMagic.Controller();

scroll.forEach(function (spy, index) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spy, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.6 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spy, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수) - 라이브러리에서 지정한 문법으로 깊게 이해 x
});


// 햄버거 메뉴
const hamburger = document.querySelector('.btn-hamburger');

window.addEventListener('scroll', function () {

if (window.scrollY < 100) {
  hamburger.style.display = "none";

  } else {
  hamburger.style.display = "block";
  }
});

const menu = document.querySelector('.menu ul')

window.addEventListener('scroll', function () {

  if (window.scrollY > 100) {
    menu.style.height = "0";
    menu.style.overflow = "hidden";

  } else {
    menu.style.height = "auto";
    menu.style.overflow = "visible";
  }
})


hamburger.addEventListener('click', function () {

  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    menu.style.height = "auto";
    menu.style.overflow = "visible";

  } else {
    menu.style.height = "0";
    menu.style.overflow = "hidden";
  }
});

// TODO: 스크롤을 내려도 메뉴가 안 없어지게