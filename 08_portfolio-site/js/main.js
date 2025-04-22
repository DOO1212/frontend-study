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