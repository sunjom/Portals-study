# 개요
타이밍 게임으로, 1초 , 5초, 10초, 15초가 있고 Start Challenge버튼을 클릭 후 초에 맞게 버튼을 다시 클릭하는 게임입니다.

# 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜Player.jsx
 ┃ ┣ 📜ResultModel.jsx
 ┃ ┗ 📜TimerChallenge.jsx
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

파일(폴더)이름 | 설명
--|--|
components/Player.jsx | UserName에 대한 부분으로, 이름을 변경할 수 있습니다. 만약 이름이 없다면 unknow User로 나타납니다.
components/ResultModal.jsx | 점수를 보여주는 Modal이다. useImperativeHandle을 사용해 부모 컴포넌트에서 useRef를 통해 Modal을 보여줄 수 있다. createPortal을 통해 다른 Dom에 삽입하여 Modal이 열려있을 때 Modal외 다른 곳과 상호작용하지 못하게 막았다.
components/TimerChallenge.jsx | 1초, 5초, 10초, 15초 게임을 시작할 수 있도록 보여주는 UI이고, 시간 데이터들을 사용하는 상위 컴포넌트이다.
