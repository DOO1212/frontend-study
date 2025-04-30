기본 설정(ctrl + ,) : font size = 편한대로 / tab size = 2 / 테마 편한대로

! + Enter 또는 Tab 키 입력으로 html 기본구조 자동 완성

lang 지정 사용자 정의 속성 추가 - 명령 팔레트 (F1 또는 ctrl + shift + p) 에서 setting 검색
 "emmet.variables": {
 "lang": "ko"
 }

메뉴 한글화 - Extensions - Korean 검색 (권장X)

코드 정렬 기능(alt + shift + f) (권장X)

태그 이름을 한번에 변경(Settings - Linked Editing 체크)

브라우저 출력(Extensions - Live Server 설치) (alt + l + o)

github 편의성 향상(Extensions - Git Graph 설치)

외부에서 접속 가능 (AWS 등 호스팅 서버 업로드)



(Git 배우고 복사해 갈 것!)

1) VS Code 단축키 정리
- 사이드 바 열고 닫기: ctrl + b
- 빠른 열기(파일이나 기호 검색): ctrl + p
- 모든 명령 표시(명령 팔레트): ctrl + shift + p 또는 F1
- 탭 닫기: ctrl + w, 모든 탭 닫기: ctrl + k + w
- 검색: ctrl + f, 프로젝트 전체 검색: ctrl + shift + f
- 바꾸기: ctrl + h
- 라인 이동: alt + up/down
- 라인 복사: ctrl + c 또는 alt + shift + up/down
- 들여쓰기: tab, 내어쓰기: shift + tab
- 이전/다음 탭 열기: ctrl + PgUp/PgDn 또는 ctrl + tab
- 편집기 분할: ctrl + \ 또는 ctrl + alt + left/right
- 다중 선택: ctrl + d 또는 ctrl + alt + up/down 또는 alt + 마우스 클릭/드래그
- 라인 삭제: ctrl + shift + k
- 주석: ctrl + /

1) EXTENSION
- HTML CSS Support html - 요소의 class에서 css 선택자 요소를 쓸때 자동 완성 기능을 지원해주는 익스텐션이다. 부트스트랩 같은 거대한 css 프레임워크를 사용할때 매우매우 유용하다. 아주 빠르게 클래스 속성 코딩이 가능하다.

- HTML to CSS autocompletion - CSS에서 코딩할때 HTML에서 사용한 속성이름을 자동 완성해주는 기능을 지원한다. 사실상 위의 HTML CSS Support 의 반대 버젼이라고 보면 된다. 이 역시 굉장히 유용한 익스텐션.

- Highlight Matching Tag - 여러 태그가 중첩되어 있을 때 해당 태그의 끝이 어디인지 찾기 힘들 때가 있다. 그럴 때 쌍이 되는 태그를 표시해 주는 플러그인이다. vs code 자체에도 태그를 누르면 하이라이트가 되는 기능이 포함되어 있지만 해당 태그의 이름(div, p, input 등)을 눌러야지 표시가 된다. 하지만 이 익스텐션은 태그 내 아무곳이나 눌러도 태그를 하이라이트 표시해서 블록을 쉽게 알수 있게 한다.