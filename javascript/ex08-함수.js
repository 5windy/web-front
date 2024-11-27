// 함수 정의와 사용 

// 정의하는 방법 

// 1) 선언식(기명) (hoisting)
func1(1, 2);

function func1(param1, param2) {
    // return;
    console.log(param1 + param2);
}

// 2) 표현식(익명)
// ㄴ hoisting을 피하기 위해 변수 안에서 정의
const func2 = function(param) {
    console.log('data : ', param);
};

func2(10);

// 3) 즉시실행 함수 
(function(param){
    console.log('param : ' + param);
})(100);

// 4) 화살표 함수
const func3 = (param) => {
    console.log('arrow data : ', param);
};

func3(111);

//
const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

arr.forEach((value) => {
    console.log(value);
});

arr.forEach((value, index) => {
    console.log(`[${index}] : ${value}`);
});

const func4 = function(value, index){
    console.log(`[${index}] : ${value}`);
};

arr.forEach(func4);