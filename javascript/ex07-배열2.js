// 다차원 배열 
// ㄴ 배열 안에 있는 또 다른 배열

// 배열 초기화 
// 1) = [];
// 2) = new Array();

const arr = new Array();

arr.push(1);
arr.push(3.14);
arr.push('hello');
arr.push([1, 2, 3]);
arr.push({
    username: '홍길동',
    age: 30
});

console.log(arr);