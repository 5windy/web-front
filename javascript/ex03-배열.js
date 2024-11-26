const arr = [];     
console.log(typeof arr);        // Array object

// 1. 추가
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log(arr);

// 제어문 
// 1) 조건문 : if, if-else, switch-case
// 2) 반복문 : while, for, do-while 
// 3) 보조제어문 : break, continue

// 새 배열 오브젝트를 선언 및 초기화한 후,
// 1~10 범위에서 짝수를 요소로 추가하고
// 다음의 포맷으로 콘솔에 전체값을 출력 
// ㄴ index : 0, element : 2

const array = [];

for(let i=1; i<=10; i++) {
    if(i % 2 === 0) {
        array.push(i);
    }
}

console.log(array);

for(let i=0; i<arr.length; i++) {
    // console.log('index : ', i, ', element : ', array[i]);
    
    // 문자열 템플릿 
    // ㄴ ``백틱 안에 문자열 포맷을 작성하고, ${} 안에 맵핑할 변수명 담기 
    const str = `index: ${i}, element: ${array[i]}`;
    console.log(str);
}

// 2. 전체값에 접근
// Array object의 forEach() 메소드 : 배열의 전체를 순회 (중단 불가, 보조 제어문 사용 불가)
array.forEach((e, index) => {
    const str = `index: ${index}, element: ${e}`;
    console.log(str);
});

array.forEach(function(e, index) {
    const str = `index: ${index}, element: ${e}`;
    console.log(str);
});

// 3. 삭제 
// 1) slice()   : 인자값을 두 개 넣어서 구간을 추출하여 리턴
// 2) splice()  : 인자값을 받아 지정한 인덱스로부터 모두 삭제, 인자 두 개인 경우 삭제할 개수만큼 처리
// 3) shift()   : 가장 처음 추가한 값을 삭제 FIFO (Queue의 자료처리 동작을 모방) 
// 4) pop()     : 마지막 추가한 값을 삭제 LIFO (Stack의 자료처리 동작을 모방)

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);

console.log(array);

let result = array.slice();
console.log('array : ', array);
console.log('result : ', result);

result = array.slice(6);
console.log('array : ', array);
console.log('result : ', result);

array.splice(6);
console.log('array : ', array);

array.splice(2, 3);
console.log('array : ', array);

array.shift();
console.log('array : ', array);

array.pop();
console.log('array : ', array);