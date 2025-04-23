// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy')
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); 
  // 컨트롤러에 장면을 할당(필수) - 라이브러리에서 지정한 문법으로 깊게 이해 x
});

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션
  // direction: 'vertical', // 수직 슬라이드
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  autoplay: {
    delay: 5000 // 5초마다 슬라이드 바뀜(기본값:3000)
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

// Quiz: modalBtn 누르면 모달창이 뜨고 closeBtn 누르면 닫히도록 만들기
// style 속성: JS로 CSS 스타일을 제어할 수 있는 속성
// 예시: 요소.style.CSS속성 = "";
modalBtn.addEventListener('click', function () {
  modalEl.style.display = 'flex';
});

visualViewport.addEventListener('click', function (event) {
    modalEl.style.display = 'none';
});

// closeBtn.addEventListener('mousemove', function () {
//   modalEl.style.display = 'none';
// });

// closeBtn.addEventListener('click', myFunction);

// function myFunction() {
//   this.style.display = 'none';
// }

// 모달창 이미지 변경
const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image');
const imageModalEl = document.querySelector('#imageModal');
const imageCloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');

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
const year = document.querySelector('.this-year');
year.textContent = new Date().getFullYear();

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
})