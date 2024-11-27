// DOM
// ㄴ Document Object(Elements) Model
// ㄴ document = html
// *DOM Tree

// 자바스크립트 언어의 주 목적 
// ㄴ 효율적인 DOM의 접근(선택)과 관리

// 1. 셀렉터(선택자) 사용
// 1) document.getElementById("아이디명")
// ㄴ 한 개의 엘리먼트 반환
console.log(document.getElementById("it1"));

// 2) document.getElementsByClassName("클래스명")
// ㄴ 엘리먼트들의 배열을 반환
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByClassName("item")[0]);

// 3) docuemnt.querySelector("#아이디명")
// ㄴ 한 개의 엘리먼트 반환
console.log(document.querySelector("#root"));

// 3) docuemnt.querySelector(".클래스명")
// ㄴ 한 개의 엘리먼트 반환 (처음 발견된 요소 한 개)
console.log(document.querySelector(".item"));


// 2. 엘리먼트의 속성을 활용한 조작
const secondChild = document.getElementById("it2");
console.log(secondChild);

// 1) 순수한 문자열을 작성해줌
secondChild.innerText = '<button>버튼</button>';

// 2) 문자열에 있는 html 태그를 활용하여 -> 엘리먼트 생성
secondChild.innerHTML += '<button>버튼</button>';