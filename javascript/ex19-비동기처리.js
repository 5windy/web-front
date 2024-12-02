// 자바스크립트를 활용한 비동기처리 
// ㄴ 동기 Synchronous : 순서대로 작업을 실행하는 것 (앞선 작업이 끝난 후에 다음 작업 실행)
// ㄴ 비동기 Asynchronous : 앞선 작업의 완료 상태와는 무관하게 바로 다음 작업을 실행하는 것 

// 1. 콜백 함수
// ㄴ 콜백 함수는 호출된 함수의 인자로 전달되어, 함수를 실행된 후에 콜백을 호출

console.log("작업 시작!");
setTimeout(() => {
    console.log("작업 완료.");
} , 1000);

// 문제)
// setTimeout(callbackFn, delay) 을 활용하여 
// 1초 후에 : [1단계] 작업완료
// 2초 후에 : [2단계] 작업완료
// 3초 후에 : [3단계] 작업완료

// 오답! : 거의 동시에 n회 setTimeout() 호출이 일어남으로 => 동시에 작업이 끝난다
// for(let i=0; i<3; i++) {    // 빠른 속도로 for문 순환 끝
//     // 1초 뒤에 콜백 실행
//     setTimeout(() => {
//         console.log(i + 1);
//     }, 1000);
// }

// 정답 : Callback Hell 콜백 지옥
// ㄴ 콜백을 호출하는 구문이 여러 단계로 중첩되어 있는 형태
// ㄴ 1) 가독성 떨어짐
// ㄴ 2) 유지보수 어려움
// => Promise 또는 Async/Await 을 활용하여 콜백 헬을 해결할 수 있음
setTimeout(() => {
    console.log("[1단계] 작업완료");
    setTimeout(() => {
        console.log("[2단계] 작업완료");
        setTimeout(() => {
            console.log("[3단계] 작업완료");
        }, 1000);
    }, 1000);
}, 1000);

// 2. 프로미스 객체 
// 3. Async/Await 구문