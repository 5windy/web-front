// 이벤트의 특성 
// ㄴ Bubbling(기본값) : "이벤트가 발생된 지점"으로부터 부모 요소로 이벤트가 "전파"되는 것 
// ㄴ Capturing : "이벤트가 발생된 지점"으로 부모 요소로부터 이벤트가 "전파"되도록 하는 것 
// ㄴ 전파 동작을 중지하고 싶다면 stopPropagation() 메소드를 활용

window.onload = () => {
    const father = document.getElementById("father");
    const son = document.getElementById("son");
    const baby = document.getElementById("baby");

    document.getElementById("root").addEventListener("click", e => {
        console.log("root", e.target);
    }, {capture: false});

    father.addEventListener("click", e => {
        console.log("father", e.target);
    }, {capture: false, once: true});   
    // 이벤트를 단 한번만 리슨 
    // ㄴ submit 이벤트에 대하여 server로의 데이터 전달 후, 반응을 기다림

    son.addEventListener("click", e => {
        e.stopPropagation();            // 전파 방지
        console.log("son", e.target);
    }, {capture: false} );

    baby.addEventListener("click", e => {
        console.log("baby", e.target);
    }, {capture: false});


    // form의 기본 이벤트는 submit
    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault(); // 기본 동작 중지
        console.log("제출이 되었습니다.");
    }, {passive: true});
    // passive 를 true로 설정하면 -> 기본 동작에 대한 중지 처리를 무시할 수 있게됨
    // ㄴ 브라우저에서 스크롤 또는 터치 이벤트에 대한 기본동작을 중지하려는 시도가 있음 
    // ㄴ 특별히는 모바일 환경에서 passive 값을 염두하고 처리해야 하는 경우가 많다 

}
