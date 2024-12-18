// 정규식 활용 

// 정규식 구조
// /패턴/ 
// /패턴/플래그 

// 1. 자주 사용하는 플래그
// 1) g : 전역 검색 
// 2) i : 대소문자 구분 하지 않음

let str = "apple";

let regex = /apple/;
let result = str.match(regex);
console.log(result);

regex = /apple/i;
result = str.match(regex);
console.log(result);

str = 'APPLE';

regex = /apple/i;
result = str.match(regex);
console.log(result);

str = 'apple';

regex = /p/g;
result = [...str.matchAll(regex)];  // ... 스프레드 연산자, 결과값으로 들어온 각 요소들을 펼쳐서 배열에 담아줌
console.log(result);

// 2. 자주 사용하는 패턴 
// 0) . 은 와일드카드               예) /^.apple$/ => aapple, 0apple
// 1) \d 는 [0-9] 와 같다           <-> \D 숫자 제외
// 2) \w 는 [0-9A-Za-z_] 와 같다    <-> \W 영문자와 숫자와 _ 제외
// 3) \s 는 공백을 의미

// 3. 반복 패턴 (횟수)
// *  0회 이상 반복
// +  1회 이상 반복
// ?  0회 또는 1회만 반복
// 1) {n}
// 2) {n,}
// 3) {n,m}

// 휴대번호에 대한 정규식 활용 검증
regex = /\d{3}-\d{4}-\d{4}/;

str = "010-1234";
result = str.match(regex);
console.log(result);            // null

str = "010-1234-1234";
result = str.match(regex);
console.log(result);
/*
[
    '010-1234-1234',
    index: 0,
    input: '010-1234-1234',
    groups: undefined
    ]
    */
   
str = "010-1234-1234김지연";
result = str.match(regex);
console.log(result);

// 4. 자주 사용하는 경계 매칭 
// 1) 시작을 의미하는 ^
// 2) 끝을 의미하는 $

regex = /^\d{3}-\d{4}-\d{4}$/;      // /^문자열패턴$/
result = str.match(regex);
console.log(result);                // null

// if(regex.test(str)) {
if(result) {
    console.log('통과');
} else {
    console.log('미통과');
}

// 문제)
// 이메일 주소에 대한 검증 로직 작성하기 
// ㄴ 정규식 활용 
// ㄴ match() 와 test() 호출 후 결과 출력
// ㄴ 1) 유효한 이메일 입니다.  
// ㄴ 2) 유효하지 않은 이메일 입니다.

// apple@domain.com
// 1) 유저네임 패턴은 숫자와 영문자 대소문자와 특수문자 . _ % + - 가 최소 한 개 이상 
// ㄴ [0-9a-zA-Z._%+-]+
// ㄴ 연속되는 특수문자는 허용 X (문자열 최소 두 개 이상으로 수정)
// ㄴ 특수문자가 있는 경우, 시작과 끝에 문자가 있어야함 .apple app..le 
// ㄴ [0-9a-zA-Z]+(?:[._%+-]?[0-9a-zA-Z]+)+

// 2) 도메인의 패턴은 숫자와 영문자 대소문자와 특수문자 . - 가 최소 한 개 이상
// ㄴ [0-9a-zA-Z.-]+
// ㄴ 연속되는 특수문자는 허용 X (문자열 최소 두 개 이상으로 수정)
// ㄴ 특수문자가 있는 경우, 시작과 끝에 문자가 있어야함 .apple app..le 

// 3) 접미사 패턴은 영문자 대소문자 두 개 이상
// .닷은 와일드카드와 겹치기 때문에 \. 이스케이프 문자로 처리해야함
// ㄴ [a-zA-Z]{2,}

// 정규식의 클래스 [패턴열거]

// 정규식의 캡쳐 그룹 (패턴열거)
// ㄴ 캡쳐된 문자열 기억 
// ㄴ 저장하지는 않도록 (?:패턴열거) (성능 최적화)

regex = /^[0-9a-zA-Z]+(?:[._%+-]?[0-9a-zA-Z]+)+@[0-9a-zA-Z]+(?:[.-]?[0-9a-zA-Z]+)+\.[a-zA-z]{2,}$/;