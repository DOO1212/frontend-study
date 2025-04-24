(정리) 레이아웃 구성, 정렬, 배치하는 기술
margin, padding 여백을 줘서 콘텐츠 위치 조정

가로 길이를 갖는 블록 요소 margin: 0 auto;

인라인 요소 text-align: center; line-height: 요소의 높이;

absolute, fixed 요소 3-1. 단순 위치 속성(top, left, right, bottom)으로 배치 3-2. 가로 또는 세로 사이즈 지정 + 방향별 거리(left, right 또는 top, bottom을 0으로) + margin: auto; 로 가운데 배치 3-3. left + margin-left / right + margin-right / top + margin-top / bottom + margin-bottom 예) 가운데 배치 left: 50%; + margin-left: -width의 절반; top: 50%; + margin-top: -height의 절반;

Flexbox display: flex; flex-direction: row; (기본값) justify-content: center; (수평 정렬) align-items: center; (수직 정렬)