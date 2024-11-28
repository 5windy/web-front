// "이벤트 핸들러"와 "이벤트 리스너"로
// 브라우저를 포함한 문서상에 발생한 이벤트를 처리할 수 있음

// 1. 이벤트 핸들러
// ㄴ html 태그 인라인으로 on + 이벤트명 속성에 실행할 JS 문장을 작성
// ㄴ 간단한 조작일 경우에 사용 

// 2. 이벤트 리스너 
// ㄴ 자바스크립트를 통한 이벤트의 조작 (대부분의 이벤트 처리 방법)
// ㄴ 엘리먼트.addEventlistener("이벤트명", 이벤트핸들함수)

window.onload = () => {

    const title = document.getElementById("title");
    title.addEventListener("click", event => {
        console.log("click!");
    });


}

// 1) KeyboardEvent
// ㄴ keydown : 윈도우에 포커스 된 상태에서 키보드의 키가 눌리는 이벤트
window.addEventListener("keydown", e => {
    console.log(e.key);         // KeyboardEvent.key : 키의 값
    console.log(e.code);        // KeyboardEvent.code : 물리적 키의 위치값 
    console.log(e.repeat);      // KeyboardEvent.repeat : 키가 계속 눌리고 있는 여부 
})

// ㄴ