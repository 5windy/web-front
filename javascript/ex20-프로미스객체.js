// 2. 프로미스 객체 
// ㄴ 비동기 처리 작업의 또는 실패가 된 
// ㄴ 결과를 관리해주는 객체

const myPromise = new Promise((reslove, reject) => {
    console.log("작업 시작 >>>");
    setTimeout(() => {
        if(true) {
            console.log("<<< 작업 종료");
            reslove(1);
        } else {
            reject(0);
        }
    }, 1000);
});

// 프로미스 객체의 사용 방법 (체인 방식으로 사용)
myPromise
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => {
    console.log("END");
})


// 문제 1) 다음의 콜백 지옥을 Promise 객체와 체인을 활용하여 해결해보기
// setTimeout(() => {
//     console.log("[1단계] 작업완료");
//     setTimeout(() => {
//         console.log("[2단계] 작업완료");
//         setTimeout(() => {
//             console.log("[3단계] 작업완료");
//         }, 1000);
//     }, 1000);
// }, 1000);

function solution(step, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`[${step}단계] 작업완료`);
            resolve();
        }, delay);
    });
}

solution(1, 1000)
.then(() => solution(2, 1000))
.then(() => solution(3, 1000));