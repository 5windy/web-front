// 문자열 : 문자의 배열
// ㄴ 문자열 또한 index가 존재한다

let str = 'hello world';
let str2 = 'hello world';
let str3 = 'hello';

console.log(str === str2);
console.log(str2 === str3);

// charAt(인덱스) : 해당 위치의 캐릭터 한 개을 반환
console.log(str.charAt(1));

// concat(문자열) : 문자열 + 문자열 확장한 결과를 새롭게 리턴
console.log(str.concat('!'));
console.log(str);

// endsWith(문자열) : 인자값으로 넘긴 문자열로 끝나는지 여부 리턴
console.log(str.endsWith('!'));
console.log(str.endsWith('d'));

// includes(문자열) : 인자값으로 넘긴 문자열이 존재하는지 여부 리턴 (두 번째 인자를 지정하면, 위치까지 일치하는지)
console.log(str.includes('hello'));
console.log(str.includes('apple'));

// valueOf() 문자열의 실제 값을 가져와 줌 
// ㄴ 동적으로 문자열이 생성될 때 비교 단계에서 필요
const test = new String('hello');
console.log(str3 === test);                         // false
console.log(str3.valueOf() === test.valueOf());     // true

// split() : 구분자 문자열을 기준으로 문자열을 잘라내준 결과를 
str = "가/나/다";
let result = str.split('/');
console.log(result);

// match() & test() 
// ㄴ 정규식을 활용한 문자열 비교

// 정규식 문자열의 선언과 초기화
let regex = /abc/;
str = "abc";

result = str.match("abc");
console.log(result);        //  [ 'abc', index: 0, input: 'abc', groups: undefined ]

result = str.match(regex);
console.log(result);        // [ 'abc', index: 0, input: 'abc', groups: undefined ]