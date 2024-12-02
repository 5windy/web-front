export const taskA = () => {
    return new Promise(reslove => {
        setTimeout(() => {
            console.log("3초 작업이 완료되었다.");
            reslove({
                say : "hi!"
            });
        }, 3000);
    })
}

export const taskB = new Promise(resolve => {
    setTimeout(() => {
        console.log("5초 작업이 완료되었다.");
        resolve({
            say : "hello"
        });
    }, 5000);
});

// 문제 2)
// Promise.all([프로미스객체1, 프로미스객체2 ...]) 을 활용하여 
// 3초짜리 작업과 5초 작업을 병렬로 실행한 결과를 확인해보기 
// 병렬로 실행중인 "모든 작업이 끝날 때까지 기다린 후"에 결과를 모두 반환

// Promise.all([taskA(), taskB])
// .then(result => console.log(result));

// 문제 3)
// Promise.race([프로미스객체1, 프로미스객체2, ...]) 을 활용하여 
// 3초짜리 작업과 5초 작업을 병렬로 실행한 결과를 확인해보기 
// 가장 먼저 완료된 작업의 결과를 즉시 반환 

Promise.race([taskA(), taskB])
.then(result => console.log(result));

// 서술) Promise.all()과 Promise.race()의 동작을 설명하고 차이점을 서술
// ㄴ 여러개의 프로미스 객체의 작업을 병렬로 실행해주는 공통점이 있지만 
// ㄴ Promise.all()은 모든 작업의 완료를 기다린 후에 모든 결과를 반환하고,
// ㄴ Promise.race()는 먼저 완료된 작업을 즉시 반환함 
// * 더 늦은 작업들은 중단되는 것이 아니라, 계속해서 작업을 이어감.