import {taskA, taskB} from "./ex20-1.js";

// 3. Async/Await 구문 
// ㄴ Promise기반의 비동기 작업을 
// ㄴ 동기식으로 읽을 수 있도록 도와주는 구문 (가독성을 높여줌)

// async function func() {}
const func = async () => {
    try {
        const result = await taskA();
        console.log("result : ", result);
        const result2 = await taskB;
        console.log("result2 : ", result2);
    } catch (error) {
        console.error(error);
    }
}

func();

// 문제) 다음의 콜백 지옥 구문을 Promise와 Async/Await 구문을 활용하여 정리해보자
// setTimeout(() => {
//     console.log("[1단계] 작업완료");
//     setTimeout(() => {
//         console.log("[2단계] 작업완료");
//         setTimeout(() => {
//             console.log("[3단계] 작업완료");
//         }, 1000);
//     }, 1000);
// }, 1000);

const task = (step, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`[${step}단계] 작업완료`);
            resolve();
        }, delay);
    });
}

const solveTask = async () => {
    try {
        await task(1, 1000);
        await task(2, 1000);
        await task(3, 1000);
    } catch (error) {
        console.error(error);
    }
}

solveTask();

// 자바스크립트 비동기 처리 방법 세 가지에 대한 비교, 장단점 정리 
