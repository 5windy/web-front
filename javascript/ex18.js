// setInterval()을 활용한 타이머 만들기 

// let sec = 0;

// const timer = setInterval(e => {
//     console.log(++ sec);

//     if(sec === 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// timer;

// 시:분:초.밀리초 포맷으로 3초까지 출력 (밀리초 단위 동작)

let cnt = 0;

const clock = setInterval(() => {
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const ms = now.getMilliseconds();

    const message = `${hour}:${minute}:${second}.${ms}`;

    console.log(message);
    console.log('cnt : ', cnt);

    if(++ cnt >= 300) {
        clearInterval(clock);
    }
}, 10); // 브라우저등의 실행환경에서 4~5 ms 딜레이 강제함 (1ms 동작 불가) => Date 객체를 활용한 시간 기반의 조작

