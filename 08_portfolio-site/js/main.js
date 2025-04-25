// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!) - 라이브러리에서 지정한 문법으로 깊게 이해X
});

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  // direction: 'vertical', // 수직 슬라이드
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

// 모달창 띄우기
const modalBtn = document.querySelector('.project .btn-modal');
const modalEl = document.querySelector('#modal');
const closeBtn = document.querySelector('#modal .btn-close');

const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image');
const imageModalEl = document.querySelector('#imageModal');
const imageCloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');

// Quiz: modalBtn 누르면 모달창이 뜨고 closeBtn 누르면 닫히도록 만들기
// style 속성: JS로 CSS 스타일을 제어할 수 있는 속성
// 예시: 요소.style.CSS속성 = "";
modalBtn.addEventListener('click', function () {
  modalEl.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
  modalEl.style.display = 'none';
});

imageModalBtnList.forEach(function (imageModalBtn, index) {
  imageModalBtn.addEventListener('click', function () {
    imageEl.src = imageModalBtn.dataset.imageSrc;
    imageModalEl.style.display = 'flex';
  });
});
imageCloseBtn.addEventListener('click', function () {
  imageModalEl.style.display = 'none';
});
// 추가로 더 해볼 만한 것!
// 모달 바깥 영역 클릭 시 닫기
// ESC 키로 닫기
// fade 애니메이션 넣기

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#to-top');
const visualSpanEls = document.querySelectorAll('.visual h1 span');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y축 스크롤 위치

  // 페이지 스크롤 위치가
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    // 요소 보이기
    toTopEl.style.opacity = '1';
    toTopEl.style.transform = 'translateX(0)';

    // visual 섹션 애니메이션 빼기
    visualSpanEls.forEach(function (visualSpan) {
      visualSpan.classList.remove('animate-flash');
    });
  } else {
    // 요소 숨기기
    toTopEl.style.opacity = '0';
    toTopEl.style.transform = 'translateX(100px)';

    // visual 섹션 애니메이션 넣기
    visualSpanEls.forEach(function (visualSpan) {
      visualSpan.classList.add('animate-flash');
    });
  }
});

// 모바일용 메뉴
const btnHamburger = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('header nav');
const menuItems = document.querySelectorAll('header nav ul li a');

btnHamburger.addEventListener('click', function () {
  // if (navEl.classList.contains('active')) {
  //   navEl.classList.remove('active');
  // } else {
  //   navEl.classList.add('active');
  // }

  navEl.classList.toggle('active');
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    navEl.classList.remove('active');
  });
});