// Object
// {키1:값1, 키2:값2, 키3:값3...}

// Web API (Application Programming Interface)
// ㄴ 데이터를 주고받는 포맷으로
// ㄴ JSON을 차용을 함 
// ㄴ Javascript Object Nonation

const gildong = {
    username: '홍길동',
    age: 30,
    likes: ['음악', '둘리', '희동이', '바둑'],
    family : {
        mom: '공순이',
        dad: '둘리'
    },
    say: () => {
        console.log('hello~')
    }
}

console.log(gildong.username);
console.log(gildong.age);
console.log(gildong.likes);
console.log(gildong.likes[0]);
console.log(gildong.family);
gildong.say();